# SmartMatch Frontend 🎨

## Next.js 14 mit App Router & Tailwind CSS

### 🏗️ Architektur

Modernes Frontend mit den neuesten Web-Technologien:
- **Next.js 14**: App Router, Server Components, Server Actions
- **TypeScript**: Type-safe Development
- **Tailwind CSS**: Utility-first Styling mit shadcn/ui Components
- **State Management**: Zustand + React Query
- **Real-time**: Socket.io für Live Features

### 📦 Tech Stack

- **Framework**: Next.js 14 mit App Router
- **Styling**: Tailwind CSS + shadcn/ui + Radix UI
- **State**: Zustand (Client) + React Query (Server)
- **Forms**: React Hook Form + Zod Validation
- **API Communication**: 
  - REST: Axios
  - GraphQL: Apollo Client
  - WebSocket: Socket.io Client
- **Auth**: NextAuth.js
- **Payments**: Stripe Elements
- **Charts**: Chart.js & Recharts
- **Animations**: Framer Motion
- **Testing**: Jest + React Testing Library
- **Storybook**: Component Documentation

### 🗂️ Projektstruktur

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Auth Routes Group
│   │   ├── (marketplace)/      # Marketplace Routes
│   │   ├── (dashboard)/        # Dashboard Routes
│   │   ├── api/                # API Routes
│   │   ├── layout.tsx          # Root Layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # React Components
│   │   ├── ui/                 # Base UI Components
│   │   ├── features/           # Feature Components
│   │   ├── layouts/            # Layout Components
│   │   └── shared/             # Shared Components
│   ├── lib/                    # Utilities & Configs
│   ├── hooks/                  # Custom React Hooks
│   ├── store/                  # Zustand Stores
│   ├── services/               # API Services
│   ├── types/                  # TypeScript Types
│   └── styles/                 # Global Styles
├── public/                     # Static Assets
└── tests/                      # Test Files
```

### 🚀 Installation

```bash
# 1. Installiere Dependencies
npm install

# 2. Erstelle .env.local aus .env.example
cp .env.example .env.local

# 3. Starte Development Server
npm run dev

# App läuft auf http://localhost:3001
```

### 🔧 NPM Scripts

```bash
# Development
npm run dev            # Start Development Server
npm run build          # Production Build
npm run start          # Start Production Server

# Code Quality
npm run lint           # ESLint Check
npm run format         # Prettier Format
npm run type-check     # TypeScript Check

# Testing
npm run test           # Run Tests
npm run test:watch     # Test Watch Mode
npm run test:coverage  # Test Coverage

# Storybook
npm run storybook      # Start Storybook
npm run build-storybook # Build Storybook
```

### 🎨 UI Components

Die App nutzt eine Kombination aus:
- **shadcn/ui**: Hochwertige, anpassbare Components
- **Radix UI**: Accessible, unstyled Components
- **Headless UI**: Unstyled, accessible UI Components
- **Custom Components**: Speziell für SmartMatch entwickelt

### 📱 Responsive Design

- **Mobile First**: Optimiert für Mobile Devices
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

### 🎯 Key Features

#### SmartMatch AI Interface
- Emotionsbasierte Produktsuche
- Intelligente Bedarfsanalyse
- Budget-Optimierung
- Personalisierte Empfehlungen

#### Live Shopping
- Echtzeit Video-Streaming
- Live Chat
- Flash Sales
- Interaktive Produktpräsentationen

#### Marketplace
- Advanced Filtering
- Infinite Scroll
- Quick View
- Wishlist Management

#### Seller Dashboard
- Product Management
- Analytics Dashboard
- Order Processing
- Live Session Scheduling

### 🌐 Routing Structure

```
/                           # Homepage
/marketplace                # Produktkatalog
/ai-shopping                # SmartMatch AI
/live                       # Live Shopping Sessions
/products/[id]              # Produkt Details
/seller/dashboard           # Verkäufer Dashboard
/seller/products            # Produkt Management
/seller/analytics           # Verkäufer Analytics
/seller/live                # Live Session Management
/cart                       # Warenkorb
/checkout                   # Checkout Process
/account                    # User Account
/account/orders             # Bestellungen
/account/wishlist           # Wunschliste
/auth/login                 # Login
/auth/register              # Registrierung
/auth/forgot-password       # Passwort Reset
```

### 🔒 Authentication Flow

1. **Registration**: E-Mail Verification
2. **Login**: JWT + Refresh Token
3. **2FA**: Optional TOTP Support
4. **Social Login**: Google, Facebook (geplant)

### 💳 Payment Integration

- **Stripe**: Kreditkarten, SEPA, Apple Pay, Google Pay
- **PayPal**: Express Checkout
- **Klarna**: Buy Now, Pay Later (geplant)

### 🎨 Theming

- **Light/Dark Mode**: System-aware mit Toggle
- **Custom Theme Colors**: Anpassbar über CSS Variables
- **Animations**: Smooth Transitions mit Framer Motion

### ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image Component
- **Code Splitting**: Automatic mit Next.js
- **Lazy Loading**: Components & Images
- **Prefetching**: Next.js Link Prefetching
- **Bundle Analysis**: Webpack Bundle Analyzer

### 🧪 Testing Strategy

- **Unit Tests**: Components & Hooks
- **Integration Tests**: User Flows
- **E2E Tests**: Playwright (geplant)
- **Visual Regression**: Chromatic (geplant)

### 📊 Analytics & Monitoring

- **Google Analytics 4**: User Tracking
- **Sentry**: Error Monitoring
- **Vercel Analytics**: Performance Metrics
- **Custom Events**: User Behavior Tracking

### 🚀 Deployment

```bash
# Build for Production
npm run build

# Docker Build
docker build -t smartmatch-frontend .

# Vercel Deployment
vercel --prod
```

### 🐛 Debugging

- React DevTools
- Redux DevTools (für Zustand)
- Apollo DevTools
- Network Tab für API Calls

---

**Built with ❤️ using Next.js 14**
