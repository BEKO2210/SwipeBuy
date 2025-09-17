# SmartMatch Backend 🚀

## NestJS Backend mit REST & GraphQL API

### 🏗️ Architektur

Das Backend ist als **Microservices-ready Monolith** aufgebaut:
- **Modulare Struktur**: Jedes Feature ist ein eigenes Modul
- **Clean Architecture**: Trennung von Business Logic und Infrastructure
- **CQRS Pattern**: Command Query Responsibility Segregation für komplexe Operationen
- **Repository Pattern**: Abstraktion der Datenbankzugriffe

### 📦 Tech Stack

- **Framework**: NestJS 10.x mit TypeScript
- **Datenbank**: PostgreSQL mit TypeORM
- **Cache**: Redis für Sessions & Cache
- **API**: REST + GraphQL (Apollo Server)
- **Auth**: JWT mit Refresh Tokens + 2FA
- **Queue**: Bull für Background Jobs
- **WebSocket**: Socket.io für Live Features
- **Payment**: Stripe & PayPal Integration
- **Monitoring**: Prometheus Metrics

### 🗂️ Projektstruktur

```
backend/
├── src/
│   ├── config/           # Konfigurationen
│   ├── common/           # Shared utilities
│   │   ├── decorators/   # Custom decorators
│   │   ├── filters/      # Exception filters
│   │   ├── guards/       # Auth guards
│   │   ├── interceptors/ # Request/Response interceptors
│   │   └── pipes/        # Validation pipes
│   ├── database/         # Database configs & migrations
│   ├── modules/          # Feature modules
│   │   ├── auth/         # Authentication & Authorization
│   │   ├── users/        # User management
│   │   ├── products/     # Product catalog
│   │   ├── orders/       # Order processing
│   │   ├── payments/     # Payment handling
│   │   ├── ai/           # AI integration
│   │   ├── live-shopping/# Live shopping features
│   │   └── admin/        # Admin dashboard
│   ├── app.module.ts     # Root module
│   └── main.ts           # Application entry
├── test/                 # Tests
├── migrations/           # Database migrations
└── seeds/                # Database seeds
```

### 🚀 Installation

```bash
# 1. Installiere Dependencies
npm install

# 2. Erstelle .env aus .env.example
cp .env.example .env

# 3. Starte PostgreSQL & Redis
docker-compose up -d postgres redis

# 4. Führe Migrationen aus
npm run migration:run

# 5. Starte Development Server
npm run start:dev
```

### 🔧 NPM Scripts

```bash
# Development
npm run start:dev       # Start mit Hot Reload
npm run start:debug     # Start mit Debugger

# Production
npm run build          # Build für Production
npm run start:prod     # Start Production Server

# Database
npm run migration:generate -- -n MigrationName  # Neue Migration
npm run migration:run                            # Migrationen ausführen
npm run migration:revert                         # Letzte Migration rückgängig

# Testing
npm run test           # Unit Tests
npm run test:e2e       # E2E Tests
npm run test:cov       # Test Coverage

# Code Quality
npm run lint           # ESLint
npm run format         # Prettier
```

### 🔑 API Endpoints

#### REST API (v1)

**Authentication**
- `POST /api/v1/auth/register` - Registrierung
- `POST /api/v1/auth/login` - Login
- `POST /api/v1/auth/refresh` - Token Refresh
- `POST /api/v1/auth/logout` - Logout
- `POST /api/v1/auth/2fa/generate` - 2FA aktivieren
- `POST /api/v1/auth/2fa/verify` - 2FA verifizieren

**Users**
- `GET /api/v1/users/profile` - Eigenes Profil
- `PATCH /api/v1/users/profile` - Profil updaten
- `GET /api/v1/users/:id` - User Details
- `POST /api/v1/users/seller/register` - Als Verkäufer registrieren

**Products**
- `GET /api/v1/products` - Produkte listen
- `GET /api/v1/products/:id` - Produkt Details
- `POST /api/v1/products` - Produkt erstellen (Verkäufer)
- `PATCH /api/v1/products/:id` - Produkt updaten
- `DELETE /api/v1/products/:id` - Produkt löschen
- `POST /api/v1/products/:id/images` - Bilder upload

**Orders**
- `GET /api/v1/orders` - Eigene Bestellungen
- `GET /api/v1/orders/:id` - Bestelldetails
- `POST /api/v1/orders` - Bestellung erstellen
- `PATCH /api/v1/orders/:id/status` - Status updaten

**SmartMatch AI**
- `POST /api/v1/ai/match` - AI Produktempfehlungen
- `POST /api/v1/ai/analyze-needs` - Bedarfsanalyse
- `GET /api/v1/ai/suggestions` - Personalisierte Vorschläge

#### GraphQL API

```graphql
# Queries
query GetProducts($filter: ProductFilterInput) {
  products(filter: $filter) {
    id
    name
    price
    seller {
      name
      rating
    }
  }
}

# Mutations
mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    name
  }
}

# Subscriptions
subscription OnNewProduct {
  productAdded {
    id
    name
    price
  }
}
```

### 🔒 Sicherheit

- **JWT Auth**: Access & Refresh Tokens
- **2FA**: TOTP-basierte Zwei-Faktor-Authentifizierung
- **Rate Limiting**: Schutz vor Brute Force
- **Helmet**: Security Headers
- **CORS**: Konfigurierbare Origins
- **Input Validation**: class-validator
- **SQL Injection Protection**: TypeORM Parameterized Queries
- **XSS Protection**: Content Security Policy

### 🎯 Features Status

✅ **Implementiert**
- Projektstruktur
- Basis-Konfiguration
- Docker Setup

⏳ **In Entwicklung**
- Auth Module
- User Module
- Product Module

📅 **Geplant**
- Order Management
- Payment Integration
- AI Service Integration
- Live Shopping
- Admin Dashboard

### 🐳 Docker

```bash
# Build Image
docker build -t smartmatch-backend .

# Run Container
docker run -p 3000:3000 --env-file .env smartmatch-backend

# Mit Docker Compose
docker-compose up backend
```

### 📊 Monitoring

- **Health Check**: `GET /health`
- **Metrics**: `GET /metrics` (Prometheus)
- **API Docs**: `http://localhost:3000/api/docs`
- **GraphQL Playground**: `http://localhost:3000/graphql`

### 🧪 Testing Strategy

- **Unit Tests**: Für alle Services
- **Integration Tests**: Für Controller
- **E2E Tests**: Für komplette User Flows
- **Load Tests**: Mit Artillery

### 📝 Commit Convention

```
feat: Neues Feature
fix: Bug Fix
docs: Dokumentation
style: Code Style (keine Logic-Änderungen)
refactor: Code Refactoring
test: Tests hinzufügen
chore: Maintenance
```

---

**Built with ❤️ using NestJS**
