# Backend Development Milestones - Holyone Travels

**Developer Guide:** Step-by-step milestones for building the complete backend  
**Framework:** NestJS + PostgreSQL + Prisma  
**Last Updated:** January 7, 2026

---

## 🎯 How to Use This Guide

1. Complete milestones **in order** (they build on each other)
2. Check off each task as you complete it
3. Test thoroughly before moving to the next milestone
4. Commit your code after each major milestone

---

## 📦 Milestone 0: Project Setup & Environment

### 0.1 Initialize NestJS Project

- [x] Create new NestJS project: `npx @nestjs/cli new holyone-backend`
- [x] Choose `npm` as package manager
- [x] Navigate to project: `cd holyone-backend`
- [x] Test server: `npm run start:dev` (should run on port 3000)
- [x] Verify endpoint: Visit `http://localhost:3000` (should see "Hello World!")

### 0.2 Install Core Dependencies

```bash
npm install @prisma/client prisma
npm install @nestjs/config
npm install class-validator class-transformer
npm install @nestjs/passport passport passport-jwt
npm install @nestjs/jwt bcryptjs
npm install stripe
npm install cloudinary streamifier
npm install -D @types/streamifier
npm install resend react-email

npm install -D @types/bcryptjs @types/passport-jwt
npm install -D prisma
```

- [x] All dependencies installed successfully
- [x] No version conflicts

### 0.3 Set Up Environment Variables

- [ ] Create `.env` file in root
- [ ] Add to `.gitignore`: `.env`
- [ ] Create `.env.example` for team reference

```bash
# .env
DATABASE_URL="postgresql://user:password@localhost:5432/holyone_db"
JWT_SECRET="your-super-secret-jwt-key-change-this"
JWT_EXPIRATION="7d"

STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

RESEND_API_KEY="re_..."
FROM_EMAIL="orders@holyonetravels.com"

FRONTEND_URL="http://localhost:3000"
```

- [ ] Environment file created
- [ ] Example file created

### 0.4 Configure NestJS

- [ ] Install `@nestjs/config`: `npm install @nestjs/config`
- [ ] Update `app.module.ts`:

```typescript
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
```

- [ ] Configuration working

### 0.5 Set Up Docker (Optional but Recommended)

- [ ] Create `docker-compose.yml`:

```yaml
version: "3.8"
services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_USER: holyone
      POSTGRES_PASSWORD: password
      POSTGRES_DB: holyone_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

- [ ] Start database: `docker-compose up -d`
- [ ] Verify database is running

**Checkpoint:** ✅ Project initialized, dependencies installed, environment configured

---

## 🗄️ Milestone 1: Database Setup with Prisma

### 1.1 Initialize Prisma

```bash
npx prisma init
```

- [ ] `prisma` folder created
- [ ] `schema.prisma` file exists

### 1.2 Configure Prisma Schema

- [ ] Open `prisma/schema.prisma`
- [ ] Verify datasource configuration:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

### 1.3 Add Core Models (Start Small)

- [ ] Add `User` model to schema:

```prisma
model User {
  id            String    @id @default(uuid())
  email         String    @unique
  password      String
  fullName      String
  phone         String?
  country       String?
  role          UserRole  @default(CUSTOMER)
  emailVerified Boolean   @default(false)
  isActive      Boolean   @default(true)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([email])
  @@map("users")
}

enum UserRole {
  CUSTOMER
  ADMIN
  CONSULTANT
}
```

### 1.4 Create First Migration

```bash
npx prisma migrate dev --name init_users
```

- [ ] Migration created successfully
- [ ] Database table `users` created
- [ ] Check database: `npx prisma studio` (should see empty users table)

### 1.5 Generate Prisma Client

```bash
npx prisma generate
```

- [ ] Prisma Client generated
- [ ] No errors

### 1.6 Create Prisma Module

```bash
nest g module prisma
nest g service prisma
```

- [ ] Create `src/prisma/prisma.service.ts`:

```typescript
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

- [ ] Export PrismaService from PrismaModule
- [ ] Make PrismaModule global

**Checkpoint:** ✅ Database connected, Prisma configured, first model created

---

## 🔐 Milestone 2: Authentication Module

### 2.1 Generate Auth Module

```bash
nest g module auth
nest g service auth
nest g controller auth
```

- [ ] Auth module created
- [ ] Files generated

### 2.2 Create DTOs

- [ ] Create `src/auth/dto/register.dto.ts`:

```typescript
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  fullName: string;

  @IsString()
  phone?: string;

  @IsString()
  country?: string;
}
```

- [ ] Create `src/auth/dto/login.dto.ts`:

```typescript
import { IsEmail, IsString } from "class-validator";

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
```

### 2.3 Install Dependencies

```bash
npm install bcryptjs
npm install -D @types/bcryptjs
```

### 2.4 Implement Auth Service

- [ ] Inject PrismaService in AuthService
- [ ] Implement `register()` method:
  - Check if user exists
  - Hash password with bcrypt
  - Create user in database
  - Return user (without password)
- [ ] Implement `login()` method:
  - Find user by email
  - Compare password
  - Generate JWT token
  - Return token and user

### 2.5 Configure JWT Strategy

```bash
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/passport-jwt
```

- [ ] Create `src/auth/strategies/jwt.strategy.ts`
- [ ] Configure JWT module in AuthModule
- [ ] Create JWT payload interface

### 2.6 Create Auth Controllers

- [ ] `POST /auth/register` endpoint
- [ ] `POST /auth/login` endpoint
- [ ] `GET /auth/me` endpoint (protected)

### 2.7 Create Guards

- [ ] Create `src/auth/guards/jwt-auth.guard.ts`
- [ ] Create `src/auth/guards/roles.guard.ts`
- [ ] Create custom decorator for current user

### 2.8 Test Authentication

```bash
# Test with curl or Postman
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"password123","fullName":"Test User"}'
```

- [ ] Registration works
- [ ] Login returns JWT token
- [ ] Protected routes require token
- [ ] Invalid token is rejected

**Checkpoint:** ✅ User registration, login, and JWT authentication working

---

## 📋 Milestone 3: Services Module (Read-Only)

### 3.1 Add Service Model to Prisma

- [ ] Add to `schema.prisma`:

```prisma
model Service {
  id              String          @id @default(uuid())
  type            ServiceType
  title           String
  slug            String          @unique
  description     String
  price           Decimal         @db.Decimal(10, 2)
  oldPrice        Decimal?        @db.Decimal(10, 2)
  images          String[]
  specs           Json?
  features        String[]
  region          String?
  isActive        Boolean         @default(true)
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@index([type])
  @@index([slug])
  @@map("services")
}

enum ServiceType {
  MAIN
  MICRO
  DIGITAL
}
```

- [ ] Run migration: `npx prisma migrate dev --name add_services`

### 3.2 Generate Services Module

```bash
nest g module services
nest g service services
nest g controller services
```

### 3.3 Create Seed Script

- [ ] Create `prisma/seed.ts`
- [ ] Import your existing services data
- [ ] Seed main packages, micro services, and digital products
- [ ] Add script to `package.json`:

```json
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}
```

- [ ] Run seed: `npx prisma db seed`
- [ ] Verify in Prisma Studio

### 3.4 Implement Services Endpoints

- [ ] `GET /services` - List all services
- [ ] `GET /services/:id` - Get service by ID
- [ ] `GET /services/main` - Filter main packages
- [ ] `GET /services/micro` - Filter micro services
- [ ] `GET /services/digital` - Filter digital products

### 3.5 Add Query Filters

- [ ] Support `?type=MAIN` query parameter
- [ ] Support `?search=canada` for search
- [ ] Support pagination: `?page=1&limit=10`

### 3.6 Test Services API

- [ ] Get all services works
- [ ] Filtering by type works
- [ ] Service details by ID works
- [ ] Search works

**Checkpoint:** ✅ Service catalog API working with seeded data

---

## 🛒 Milestone 4: Orders Module

### 4.1 Add Order Models to Prisma

- [ ] Add to `schema.prisma`:

```prisma
model Order {
  id              String       @id @default(uuid())
  orderNumber     String       @unique
  userId          String
  serviceId       String
  status          OrderStatus  @default(PENDING)
  totalAmount     Decimal      @db.Decimal(10, 2)
  currency        String       @default("USD")
  customerInfo    Json
  serviceDetails  Json?
  serviceSnapshot Json
  createdAt       DateTime     @default(now())
  updatedAt       DateTime     @updatedAt

  user            User         @relation(fields: [userId], references: [id])
  service         Service      @relation(fields: [serviceId], references: [id])

  @@index([userId])
  @@index([status])
  @@map("orders")
}

enum OrderStatus {
  PENDING
  CONFIRMED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}
```

- [ ] Update User and Service models with relations
- [ ] Run migration: `npx prisma migrate dev --name add_orders`

### 4.2 Generate Orders Module

```bash
nest g module orders
nest g service orders
nest g controller orders
```

### 4.3 Create Order DTOs

- [ ] Create `create-order.dto.ts`:

```typescript
export class CreateOrderDto {
  @IsUUID()
  serviceId: string;

  @IsObject()
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
  };

  @IsObject()
  @IsOptional()
  serviceDetails?: {
    destination?: string;
    travelDate?: string;
    passportNumber?: string;
    nationality?: string;
    purposeOfTravel?: string;
    additionalNotes?: string;
  };
}
```

### 4.4 Implement Order Number Generation

- [ ] Create method to generate unique order numbers
- [ ] Format: `HT-YYYY-XXXXXX` (e.g., HT-2026-000001)
- [ ] Ensure uniqueness

### 4.5 Implement Order Creation

- [ ] Create order in PENDING status
- [ ] Store service snapshot (current price, details)
- [ ] Link to user and service
- [ ] Return created order

### 4.6 Implement Order Endpoints

- [ ] `POST /orders` - Create order (protected)
- [ ] `GET /orders` - List user's orders (protected)
- [ ] `GET /orders/:id` - Get order details (protected, owner only)
- [ ] Ensure users can only see their own orders

### 4.7 Test Order Creation

- [ ] Can create order for existing service
- [ ] Order number is generated correctly
- [ ] Order is linked to user
- [ ] Service snapshot is stored

**Checkpoint:** ✅ Order creation and management working

---

## 💳 Milestone 5: Payment Integration (Stripe)

### 5.1 Set Up Stripe Account

- [ ] Sign up at stripe.com
- [ ] Get test API keys
- [ ] Add to `.env` file
- [ ] Install Stripe CLI for webhook testing

### 5.2 Add Payment Model to Prisma

- [ ] Add to `schema.prisma`:

```prisma
model Payment {
  id                     String        @id @default(uuid())
  orderId                String        @unique
  amount                 Decimal       @db.Decimal(10, 2)
  currency               String        @default("USD")
  status                 PaymentStatus @default(PENDING)
  paymentMethod          String
  stripePaymentIntentId  String?       @unique
  stripeChargeId         String?
  cardLast4              String?
  cardBrand              String?
  createdAt              DateTime      @default(now())
  updatedAt              DateTime      @updatedAt

  order                  Order         @relation(fields: [orderId], references: [id])

  @@index([orderId])
  @@map("payments")
}

enum PaymentStatus {
  PENDING
  PROCESSING
  SUCCEEDED
  FAILED
  REFUNDED
}
```

- [ ] Update Order model with payment relation
- [ ] Run migration: `npx prisma migrate dev --name add_payments`

### 5.3 Generate Payments Module

```bash
nest g module payments
nest g service payments
nest g controller payments
```

### 5.4 Configure Stripe

- [ ] Install Stripe SDK: `npm install stripe`
- [ ] Create Stripe service wrapper
- [ ] Inject Stripe in PaymentsService

### 5.5 Implement Payment Intent Creation

- [ ] `POST /payments/create-intent` endpoint
- [ ] Accept orderId in body
- [ ] Fetch order details
- [ ] Create Stripe PaymentIntent
- [ ] Save payment record in database
- [ ] Return clientSecret to frontend

### 5.6 Implement Payment Confirmation

- [ ] `POST /payments/confirm` endpoint
- [ ] Update payment status to SUCCEEDED
- [ ] Update order status to CONFIRMED
- [ ] Handle errors appropriately

### 5.7 Set Up Webhook Handler

- [ ] `POST /payments/webhook` endpoint
- [ ] Verify Stripe signature
- [ ] Handle `payment_intent.succeeded` event
- [ ] Handle `payment_intent.payment_failed` event
- [ ] Use raw body parser for webhook

### 5.8 Test Payment Flow

- [ ] Use Stripe test card: `4242 4242 4242 4242`
- [ ] Payment intent creation works
- [ ] Payment confirmation updates order
- [ ] Webhook receives events
- [ ] Failed payments are handled

**Checkpoint:** ✅ Stripe payment integration working end-to-end

---

## 📧 Milestone 6: Email Service

### 6.1 Set Up Email Provider

- [ ] Sign up for Resend (resend.com)
- [ ] Get API key
- [ ] Add to `.env`
- [ ] Verify domain (or use Resend's test domain)

### 6.2 Install Dependencies

```bash
npm install resend react-email
npm install -D @react-email/components
```

### 6.3 Generate Email Module

```bash
nest g module email
nest g service email
```

### 6.4 Create Email Templates

- [ ] Create `src/email/templates` folder
- [ ] Create `order-confirmation.tsx` using React Email
- [ ] Create simple text version as fallback
- [ ] Test template rendering

### 6.5 Implement Email Service

- [ ] Create `sendOrderConfirmation()` method
- [ ] Use Resend to send email
- [ ] Handle errors gracefully

### 6.6 Trigger Email on Order Confirmation

- [ ] In PaymentsService, after successful payment
- [ ] Call EmailService to send confirmation
- [ ] Include order details, payment info

### 6.7 Test Email Sending

- [ ] Order confirmation email is sent
- [ ] Email contains correct information

**Checkpoint:** ✅ Email service working, order confirmations sent

---

## 📂 Milestone 7: Document Upload (Cloudinary)

### 7.1 Set Up Cloudinary

- [ ] Create Cloudinary account (cloudinary.com)
- [ ] Get API credentials (Cloud Name, API Key, API Secret)
- [ ] Add to `.env`
- [ ] Update `ConfigModule` to validate these variables

### 7.2 Install Cloudinary SDK

```bash
npm install cloudinary streamifier
npm install -D @types/streamifier
```

### 7.3 Add Document Model

- [ ] Add to `schema.prisma`:

```prisma
model Document {
  id              String         @id @default(uuid())
  userId          String
  orderId         String?
  fileName        String
  originalName    String
  fileUrl         String
  fileSize        Int
  mimeType        String
  category        DocumentCategory
  status          DocumentStatus @default(PENDING)
  createdAt       DateTime       @default(now())

  user            User           @relation(fields: [userId], references: [id])
  order           Order?         @relation(fields: [orderId], references: [id])

  @@index([userId])
  @@map("documents")
}

enum DocumentCategory {
  PASSPORT
  PHOTO
  BANK_STATEMENT
  OTHER
}

enum DocumentStatus {
  PENDING
  VERIFIED
  REJECTED
}
```

- [ ] Update User and Order models
- [ ] Run migration: `npx prisma migrate dev --name add_documents`

### 7.4 Generate Documents Module

```bash
nest g module documents
nest g service documents
nest g controller documents
```

### 7.5 Configure File Upload

```bash
npm install -D @types/multer
```

- [ ] Configure multer in DocumentsController
- [ ] Add file size limit (10MB)
- [ ] Add file type validation (PDF, JPG, PNG)

### 7.6 Implement Cloudinary Upload Service

- [ ] Create Cloudinary provider/service
- [ ] Configure with credentials
- [ ] Implement upload method using `upload_stream`
- [ ] Generate proper folder structure (`documents/:userId`)

### 7.7 Implement Upload Endpoint

- [ ] `POST /documents/upload` (protected)
- [ ] Accept file and metadata
- [ ] Upload to Cloudinary
- [ ] Save record to database
- [ ] Return document info

### 7.8 Implement Document Listing

- [ ] `GET /documents` - List user's documents
- [ ] `GET /documents/:id` - Get document details
- [ ] `DELETE /documents/:id` - Delete document

### 7.9 Test Document Upload

- [ ] Upload PDF file works
- [ ] Upload image works
- [ ] File appears in Cloudinary dashboard
- [ ] Database record created
- [ ] Can retrieve documents

**Checkpoint:** ✅ Document upload to Cloudinary working

---

## 📊 Milestone 8: Dashboard API

### 8.1 Create Dashboard Module

```bash
nest g module dashboard
nest g service dashboard
nest g controller dashboard
```

### 8.2 Implement Dashboard Overview

- [ ] `GET /dashboard/overview` (protected)
- [ ] Count active orders
- [ ] Count completed orders
- [ ] Count pending documents
- [ ] Return summary stats

### 8.3 Implement Order List

- [ ] `GET /dashboard/orders` (protected)
- [ ] Return user's orders with service details
- [ ] Include payment status
- [ ] Support filtering by status
- [ ] Support pagination

### 8.4 Implement Order Details

- [ ] `GET /dashboard/orders/:id` (protected)
- [ ] Return full order with:
  - Service details
  - Payment info
  - Associated documents
  - Status history

### 8.5 Test Dashboard

- [ ] Dashboard overview returns correct stats
- [ ] Order list works

**Checkpoint:** ✅ Customer dashboard API complete

---

## 👨‍💼 Milestone 9: Admin Endpoints

### 9.1 Protect Admin Routes

- [ ] Create `AdminGuard`
- [ ] Check user role is ADMIN
- [ ] Apply to admin controllers

### 9.2 Create Admin Module

```bash
nest g module admin
nest g service admin
nest g controller admin
```

### 9.3 Implement Admin Dashboard Stats

- [ ] `GET /admin/dashboard/stats` (admin only)
- [ ] Total revenue (sum of successful payments)
- [ ] Total orders
- [ ] Active orders
- [ ] Pending documents

### 9.4 Implement Admin Order Management

- [ ] `GET /admin/orders` - List all orders
- [ ] Support filtering by status
- [ ] Support search by order number
- [ ] Support pagination

### 9.5 Implement Order Status Update

- [ ] `PATCH /admin/orders/:id` (admin only)
- [ ] Update order status
- [ ] Add admin notes
- [ ] Log status changes

### 9.6 Implement Customer Management

- [ ] `GET /admin/customers` - List all users
- [ ] `GET /admin/customers/:id` - Customer details
- [ ] View customer's orders

### 9.7 Implement Document Verification

- [ ] `PATCH /admin/documents/:id/verify` (admin only)
- [ ] Verify or reject documents
- [ ] Add rejection reason if rejected

### 9.8 Test Admin Features

- [ ] Admin can view all orders
- [ ] Admin can update order status
- [ ] Non-admin cannot access admin routes
- [ ] Document verification works

**Checkpoint:** ✅ Admin panel API complete

---

## 🎨 Milestone 10: API Documentation (Swagger)

### 10.1 Install Swagger

```bash
npm install @nestjs/swagger
```

### 10.2 Configure Swagger

- [ ] Update `main.ts` with Swagger setup
- [ ] Set API title and description
- [ ] Add bearer auth

### 10.3 Document All DTOs

- [ ] Add `@ApiProperty()` to all DTO fields
- [ ] Add examples
- [ ] Add descriptions

### 10.4 Document All Endpoints

- [ ] Add `@ApiTags()` to controllers
- [ ] Add `@ApiOperation()` to endpoints
- [ ] Add `@ApiResponse()` for different status codes
- [ ] Add `@ApiBearerAuth()` to protected routes

### 10.5 Test Swagger UI

- [ ] Visit `http://localhost:3000/api/docs`
- [ ] All endpoints documented
- [ ] Can test authentication
- [ ] Examples are helpful

**Checkpoint:** ✅ API fully documented with Swagger

---

## 🧪 Milestone 11: Testing

### 11.1 Write Unit Tests

- [ ] Auth Service tests
- [ ] Orders Service tests
- [ ] Payments Service tests
- [ ] Run: `npm run test`

### 11.2 Write Integration Tests

- [ ] Auth endpoints (register, login)
- [ ] Orders endpoints
- [ ] Payments endpoints
- [ ] Run: `npm run test:e2e`

### 11.3 Test Edge Cases

- [ ] Invalid inputs
- [ ] Unauthorized access
- [ ] Non-existent resources
- [ ] Payment failures

### 11.4 Check Test Coverage

```bash
npm run test:cov
```

- [ ] Aim for >80% coverage
- [ ] Focus on critical paths

**Checkpoint:** ✅ Tests written and passing

---

## 🚀 Milestone 12: Deployment Preparation

### 12.1 Environment Config

- [ ] Create `.env.production` template
- [ ] Document all required env vars
- [ ] Set up environment validation

### 12.2 Database Migrations

- [ ] Ensure all migrations are committed
- [ ] Test migration on fresh database
- [ ] Create migration rollback plan

### 12.3 Security Hardening

- [ ] Enable CORS with frontend URL only
- [ ] Add rate limiting
- [ ] Add helmet for security headers
- [ ] Remove console.logs
- [ ] Ensure no secrets in code

### 12.4 Build for Production

```bash
npm run build
```

- [ ] Build succeeds
- [ ] No TypeScript errors
- [ ] Dist folder created

### 12.5 Create Deployment Scripts

- [ ] Create `start:prod` script
- [ ] Create health check endpoint
- [ ] Create database seed script

### 12.6 Documentation

- [ ] Update README with setup instructions
- [ ] Document API endpoints
- [ ] Create deployment guide
- [ ] Document environment variables

**Checkpoint:** ✅ Ready for production deployment

---

## 📝 Final Checklist

### Core Features

- [ ] ✅ User authentication (register, login)
- [ ] ✅ Service catalog (read-only)
- [ ] ✅ Order creation and management
- [ ] ✅ Stripe payment integration
- [ ] ✅ Email notifications
- [ ] ✅ Document upload to Cloudinary
- [ ] ✅ Customer dashboard
- [ ] ✅ Admin panel

### Technical Requirements

- [ ] ✅ Database migrations
- [ ] ✅ JWT authentication
- [ ] ✅ Role-based access control
- [ ] ✅ Input validation
- [ ] ✅ Error handling
- [ ] ✅ API documentation
- [ ] ✅ Tests (unit + integration)
- [ ] ✅ Production build

### Security

- [ ] ✅ Passwords hashed
- [ ] ✅ JWT tokens secure
- [ ] ✅ CORS configured
- [ ] ✅ Rate limiting
- [ ] ✅ Input sanitization
- [ ] ✅ SQL injection prevention (Prisma)

---

## 🎯 What's Next?

After completing all milestones:

1. **Deploy to Staging**

   - Set up hosting (Railway, Heroku, AWS)
   - Deploy database
   - Deploy backend
   - Test in staging environment

2. **Connect Frontend**

   - Update Next.js app to use backend API
   - Replace dummy data with real API calls
   - Test complete user flow

3. **Optional Enhancements**
   - Add consultant module
   - Add consultation booking
   - Add review system
   - Add referral program

---

## 📚 Resources

- [NestJS Docs](https://docs.nestjs.com)
- [Prisma Docs](https://www.prisma.io/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Cloudinary SDK](https://cloudinary.com/documentation/node_integration)

---

**Good luck building! 🚀**

Remember: Complete milestones in order, test thoroughly, commit often.
