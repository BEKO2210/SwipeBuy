import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// WebSocket link for subscriptions
const wsLink = typeof window !== 'undefined'
  ? new WebSocketLink({
      uri: process.env.NEXT_PUBLIC_WS_URL?.replace('http', 'ws') + '/graphql' || 'ws://localhost:3000/graphql',
      options: {
        reconnect: true,
        connectionParams: {
          authorization: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
        },
      },
    })
  : null;

// Split links based on operation type
const splitLink = typeof window !== 'undefined' && wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      authLink.concat(httpLink)
    )
  : authLink.concat(httpLink);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: {
            keyArgs: ['filter', 'sort'],
            merge(existing = { edges: [], pageInfo: {} }, incoming) {
              return {
                ...incoming,
                edges: [...(existing.edges || []), ...(incoming.edges || [])],
              };
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
