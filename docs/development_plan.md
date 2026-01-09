# Development Implementation Plan - Holyone Travels (Simplified)

**Project:** Holyone Travels Backend Development  
**Framework:** NestJS + Next.js Frontend  
**Database:** PostgreSQL + Prisma (5 Models Only)  
**Updated:** January 7, 2026  
**Version:** 2.0 (Simplified)

---

## 📋 Executive Summary

This development plan provides a **streamlined roadmap** for implementing the Holyone Travels platform with a **simplified 5-model database schema**. The plan is structured into **3 major phases** over an **8-week timeline**, delivering a production-ready MVP faster than traditional approaches.

### Key Simplifications

- ✅ **5 Database Models** (vs 16 originally)
- ✅ **Email-based workflows** (no notification/email log tables)
- ✅ **JSON storage** for flexible data (customerInfo, serviceDetails)
- ✅ **Admin via email** (no consultant/consultation tables)
- ✅ **Faster development** (68% fewer models)

### Key Deliverables

- ✅ Complete backend API (NestJS)
- ✅ 5-model database (PostgreSQL + Prisma)
- ✅ Payment processing (Stripe)
- ✅ Email automation (Resend - not tracked in DB)
- ✅ Document management (Cloudinary)
- ✅ Simple admin endpoints
- ✅ Customer portal

---

## 🗂️ Database Schema (5 Models)

### Core Models

1. **User** - Customers & Admins
2. **Service** - Service catalog
3. **Order** - Order management with JSON fields
4. **Payment** - Stripe payments
5. **Document** - File uploads to Cloudinary

### ❌ Models Removed (Email-Based Instead)

- Consultants → Email admin to assign
- Consultations → Email scheduling (Calendly/Google Calendar)
- Reviews → External platform or email collection
- Notifications → Email only (via Resend)
- EmailLog → Resend dashboard handles tracking
- UserPreferences → Not needed for MVP
- OrderStatusHistory → Order notes field sufficient
- SystemSettings → Environment variables

---

## 🗺️ User Flow to Database Mapping (Simplified)

### **Phase 1: Discovery & Exploration**

#### User Actions

- Browse services
- View service details

#### Database Operations

```sql
-- Get all active services
SELECT * FROM services WHERE is_active = true ORDER BY sort_order;

-- Get service by ID
SELECT * FROM services WHERE id = :serviceId AND is_active = true;
```

#### Tables Used

- `services` (read-only)

---

### **Phase 2: Checkout Process**

#### User Actions

- Fill personal info
- Fill service details
- Review order
- Click "Purchase"

#### Database Operations

```sql
-- Create new user (if needed)
INSERT INTO users (email, password, full_name, role)
VALUES (:email, :hashedPassword, :fullName, 'CUSTOMER');

-- Create order with JSON data
INSERT INTO orders (
  order_number, user_id, service_id, status, total_amount,
  customer_info, service_details, service_snapshot
) VALUES (
  :orderNumber, :userId, :serviceId, 'PENDING', :amount,
  :customerInfoJSON,  -- { fullName, email, phone, country }
  :serviceDetailsJSON, -- { destination, travelDate, passport, etc. }
  :serviceSnapshotJSON -- Complete service data at purchase time
);
```

#### Tables Used

- `users` (create if new)
- `orders` (create)
- `services` (read for snapshot)

---

### **Phase 3: Payment Processing**

#### User Actions

- Enter payment info
- Process payment
- View confirmation

#### Database Operations

```sql
-- Create payment record
INSERT INTO payments (
  order_id, amount, currency, status, payment_method,
  stripe_payment_intent_id
) VALUES (
  :orderId, :amount, 'USD', 'PENDING', 'card', :stripeIntentId
);

-- On success: Update payment
UPDATE payments
SET status = 'SUCCEEDED', paid_at = NOW(),
    card_last4 = :last4, card_brand = :brand
WHERE order_id = :orderId;

-- On success: Update order
UPDATE orders SET status = 'CONFIRMED' WHERE id = :orderId;
```

#### Email Sent (via Resend - NOT in database)

- Order confirmation to customer
- New order notification to admin

#### Tables Used

- `payments` (create, update)
- `orders` (update status)

---

### **Phase 4: Customer Dashboard**

#### User Actions

- View orders
- Upload documents
- Track status

#### Database Operations

```sql
-- Get user orders
SELECT o.*, s.title, p.status as payment_status
FROM orders o
JOIN services s ON o.service_id = s.id
JOIN payments p ON o.id = p.order_id
WHERE o.user_id = :userId
ORDER BY o.created_at DESC;

-- Upload document
INSERT INTO documents (
  user_id, order_id, file_name, file_url, file_size,
  mime_type, category, status
) VALUES (
  :userId, :orderId, :cloudinaryPublicId, :cloudinaryUrl, :fileSize,
  :mimeType, :category, 'PENDING'
);
```

#### Email Sent (via Resend - NOT in database)

- Document upload notification to admin
- Document verification result to customer

#### Tables Used

- `orders` (read)
- `documents` (create, read, update)

---

### **Phase 5: Admin Management**

#### Admin Actions

- View all orders
- Update order status
- Verify documents
- Add admin notes

#### Database Operations

```sql
-- Get all orders with filters
SELECT o.*, u.email, s.title, p.status
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN services s ON o.service_id = s.id
JOIN payments p ON o.id = p.order_id
WHERE o.status = :status
ORDER BY o.created_at DESC;

-- Update order status
UPDATE orders
SET status = :newStatus, admin_notes = :notes
WHERE id = :orderId;

-- Verify document
UPDATE documents
SET status = 'VERIFIED', verified_by = :adminId, verified_at = NOW()
WHERE id = :documentId;
```

#### Email Sent (via Resend - NOT in database)

- Status update to customer
- Admin notes/instructions to customer

#### Tables Used

- All 5 models (read, update)

---

## 🏗️ Development Phases (Simplified)

### **Phase 1: Foundation** (Weeks 1-2)

#### Sprint 1.1: Setup & Authentication (Week 1-2)

**Database Models:**

- `users`

**Tasks:**

- [ ] Initialize NestJS project
- [ ] Configure Prisma with PostgreSQL
- [ ] Create User model migration
- [ ] Implement authentication (register, login, JWT)
- [ ] Create role-based guards (CUSTOMER, ADMIN)
- [ ] Write auth tests

**Endpoints:**

```
POST /auth/register
POST /auth/login
GET  /auth/me (protected)
```

**Deliverables:**

- ✅ NestJS running
- ✅ Database connected
- ✅ User auth working
- ✅ JWT tokens generated

---

### **Phase 2: Core Business Logic** (Weeks 3-5)

#### Sprint 2.1: Services Module (Week 3)

**Database Models:**

- `services`

**Tasks:**

- [ ] Create Service model migration
- [ ] Seed database from existing data
- [ ] Implement service CRUD (admin)
- [ ] Implement service listing (public)
- [ ] Add filtering by type (MAIN, MICRO, DIGITAL)
- [ ] Write service tests

**Endpoints:**

```
GET    /services                (public)
GET    /services/:id            (public)
GET    /services/type/:type     (public)
POST   /admin/services          (admin only)
PATCH  /admin/services/:id      (admin only)
```

**Deliverables:**

- ✅ Service catalog API
- ✅ Database seeded
- ✅ Public + admin endpoints

---

#### Sprint 2.2: Orders Module (Week 4)

**Database Models:**

- `orders`

**Tasks:**

- [ ] Create Order model migration
- [ ] Implement order number generation (HT-2026-XXXXXX)
- [ ] Create order creation endpoint
- [ ] Store customerInfo as JSON
- [ ] Store serviceDetails as JSON
- [ ] Store serviceSnapshot as JSON
- [ ] Implement order listing (user's own)
- [ ] Implement order details
- [ ] Write order tests

**Order Number Generator:**

```typescript
async generateOrderNumber(): Promise<string> {
  const year = new Date().getFullYear();
  const count = await this.prisma.order.count({
    where: { orderNumber: { startsWith: `HT-${year}-` } }
  });
  const sequence = (count + 1).toString().padStart(6, '0');
  return `HT-${year}-${sequence}`;
}
```

**Endpoints:**

```
POST   /orders                  (protected)
GET    /orders                  (protected, user's own)
GET    /orders/:id              (protected, owner only)
GET    /admin/orders             (admin only)
PATCH  /admin/orders/:id        (admin only)
```

**Deliverables:**

- ✅ Order creation
- ✅ JSON storage working
- ✅ Order listing
- ✅ Admin order management

---

#### Sprint 2.3: Payments Module (Week 5)

**Database Models:**

- `payments`

**Tasks:**

- [ ] Create Payment model migration
- [ ] Set up Stripe account (test mode)
- [ ] Install Stripe SDK
- [ ] Implement payment intent creation
- [ ] Implement payment confirmation
- [ ] Set up Stripe webhook
- [ ] Handle payment success (update order status)
- [ ] Handle payment failure
- [ ] Write payment tests

**Payment Flow:**

```typescript
// 1. Create payment intent
async createPaymentIntent(orderId: string) {
  const order = await this.prisma.order.findUnique({
    where: { id: orderId }
  });

  const paymentIntent = await this.stripe.paymentIntents.create({
    amount: Math.round(order.totalAmount * 100), // cents
    currency: 'usd',
    metadata: { orderId, orderNumber: order.orderNumber }
  });

  await this.prisma.payment.create({
    data: {
      orderId, amount: order.totalAmount, currency: 'USD',
      status: 'PENDING', paymentMethod: 'card',
      stripePaymentIntentId: paymentIntent.id
    }
  });

  return { clientSecret: paymentIntent.client_secret };
}

// 2. Webhook handler
@Post('webhook')
async handleWebhook(@Req() req: Request) {
  const event = this.stripe.webhooks.constructEvent(
    req.body, req.headers['stripe-signature'],
    process.env.STRIPE_WEBHOOK_SECRET
  );

  if (event.type === 'payment_intent.succeeded') {
    await this.handlePaymentSuccess(event.data.object);
  }
}
```

**Endpoints:**

```
POST /payments/create-intent  (protected)
POST /payments/webhook        (public, Stripe only)
GET  /payments/:id             (protected, owner only)
```

**Deliverables:**

- ✅ Payment intent creation
- ✅ Stripe integration
- ✅ Webhook handling
- ✅ Order status updates

---

### **Phase 3: Enhanced Features** (Weeks 6-8)

#### Sprint 3.1: Documents Module (Week 6)

**Database Models:**

- `documents`

**Tasks:**

- [ ] Create Document model migration
- [ ] Set up Cloudinary account
- [ ] Install Cloudinary SDK
- [ ] Implement file upload
- [ ] Implement Cloudinary upload
- [ ] Add file validation (size, type)
- [ ] Implement document listing
- [ ] Implement document deletion
- [ ] Admin: Document verification
- [ ] Write document tests

**Cloudinary Upload:**

```typescript
async uploadToCloudinary(file: Express.Multer.File, userId: string) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: `documents/${userId}` },
      (error, result) => {
        if (error) return reject(error);
        resolve({
          fileName: result.public_id,
          fileUrl: result.secure_url
        });
      }
    );
    uploadStream.end(file.buffer);
  });
}
```

**Endpoints:**

```
POST   /documents/upload        (protected)
GET    /documents               (protected, user's own)
DELETE /documents/:id           (protected, owner only)
PATCH  /admin/documents/:id/verify (admin only)
```

**Deliverables:**

- ✅ Document upload
- ✅ Cloudinary integration
- ✅ Admin verification

---

#### Sprint 3.2: Email Service (Week 7)

**No Database Tables** - All via Resend

**Tasks:**

- [ ] Sign up for Resend
- [ ] Install Resend SDK and React Email
- [ ] Create email service
- [ ] Create order confirmation template
- [ ] Create document notification template
- [ ] Create status update template
- [ ] Trigger emails on key events
- [ ] Test all email templates

**Email Service:**

```typescript
// email/email.service.ts
import { Resend } from "resend";

@Injectable()
export class EmailService {
  private resend = new Resend(process.env.RESEND_API_KEY);

  async sendOrderConfirmation(order: Order) {
    await this.resend.emails.send({
      from: "orders@holyonetravels.com",
      to: order.customerInfo.email,
      subject: `Order Confirmation - ${order.orderNumber}`,
      react: OrderConfirmationEmail({ order }),
    });
  }

  async sendAdminNotification(order: Order, type: string) {
    await this.resend.emails.send({
      from: "system@holyonetravels.com",
      to: "admin@holyonetravels.com",
      subject: `[Admin] ${type} - ${order.orderNumber}`,
      react: AdminNotificationEmail({ order, type }),
    });
  }
}
```

**Email Triggers:**

- Order confirmed → sendOrderConfirmation()
- Document uploaded → sendAdminNotification('Document Uploaded')
- Document verified → sendDocumentVerified()
- Order status changed → sendStatusUpdate()

**Deliverables:**

- ✅ Email service working
- ✅ Templates created
- ✅ Admin notifications

---

#### Sprint 3.3: Dashboard & Polish (Week 8)

**Tasks:**

- [ ] Implement dashboard overview endpoint
- [ ] Get user stats (active orders, pending docs)
- [ ] Implement profile update
- [ ] Add Swagger documentation
- [ ] Write E2E tests
- [ ] Security audit
- [ ] Performance optimization
- [ ] Deploy preparation

**Dashboard Overview:**

```typescript
async getDashboardOverview(userId: string) {
  const [activeOrders, completedOrders, pendingDocs] = await Promise.all([
    this.prisma.order.count({
      where: { userId, status: { in: ['CONFIRMED', 'IN_PROGRESS'] } }
    }),
    this.prisma.order.count({
      where: { userId, status: 'COMPLETED' }
    }),
    this.prisma.document.count({
      where: { userId, status: 'PENDING' }
    })
  ]);

  return { activeOrders, completedOrders, pendingDocs };
}
```

**Endpoints:**

```
GET    /dashboard/overview      (protected)
GET    /dashboard/orders        (protected)
PATCH  /users/profile           (protected)
```

**Deliverables:**

- ✅ Dashboard API
- ✅ Swagger docs
- ✅ Tests passing
- ✅ Production ready

---

## 📊 Development Timeline (8 Weeks)

```
Week 1-2:  [████████] Authentication & Setup
Week 3:    [████████] Services Module
Week 4:    [████████] Orders Module
Week 5:    [████████] Payments Module
Week 6:    [████████] Documents Module
Week 7:    [████████] Email Service
Week 8:    [████████] Dashboard & Polish
```

**Total:** 8 weeks (vs 12 weeks in original plan)  
**Reduction:** 33% faster development

---

## 🎯 Critical Path

### Must Be Done In Order

1. Setup → Auth → Services → Orders → Payments → Dashboard

### Can Be Done Anytime

- Documents (Week 6 or earlier)
- Email Service (Week 7 or earlier)

---

## 📧 Email-Based Workflows (Not in Database)

### Admin Email Notifications

**New Order Created:**

```
To: admin@holyonetravels.com
Subject: [New Order] HT-2026-000123 - $300
Body:
  Customer: John Doe (john@example.com)
  Service: Professional Visa Support
  Amount: $300.00

  View Order: https://admin.holyonetravels.com/orders/xxx
```

**Document Uploaded:**

```
To: admin@holyonetravels.com
Subject: [Document Uploaded] HT-2026-000123
Body:
  Customer: John Doe
  Document: Passport Copy
  View & Verify: https://admin.holyonetravels.com/documents/xxx
```

**Customer Status Updates:**

```
To: customer@email.com
Subject: Order Status Update - HT-2026-000123
Body:
  Your order status has been updated to: IN PROGRESS
  What this means: [...]
  Next steps: [...]
```

---

## 🧪 Testing Strategy

### Unit Tests (Jest)

```typescript
describe("OrdersService", () => {
  it("should create order with valid data", async () => {
    const order = await service.createOrder(userId, dto);
    expect(order.orderNumber).toMatch(/HT-\d{4}-\d{6}/);
    expect(order.status).toBe("PENDING");
  });
});
```

### Integration Tests (Supertest)

```typescript
describe("POST /orders", () => {
  it("should create order when authenticated", () => {
    return request(app.getHttpServer())
      .post("/orders")
      .set("Authorization", `Bearer ${token}`)
      .send(orderDto)
      .expect(201);
  });
});
```

### E2E Test Flow

1. Register user
2. View services
3. Create order
4. Process payment (Stripe test card)
5. Upload document
6. Verify order status

---

## 📈 Success Metrics

### Technical

- API response time: < 200ms
- Test coverage: > 80%
- Zero critical vulnerabilities
- Build time: < 30 seconds

### Business

- Order completion rate: > 85%
- Payment success rate: > 95%
- Document upload rate: > 80%
- Customer satisfaction: > 4.5/5

---

## 🚀 Deployment Strategy

### Environment Setup

```env
# Database
DATABASE_URL=postgresql://...

# JWT
JWT_SECRET=...
JWT_EXPIRATION=7d

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Cloudinary
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Email
RESEND_API_KEY=re_...
FROM_EMAIL=orders@holyonetravels.com
ADMIN_EMAIL=admin@holyonetravels.com
```

### Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Database seeded with services
- [ ] Stripe webhook configured
- [ ] Cloudinary account configured
- [ ] Resend domain verified
- [ ] Admin user created
- [ ] Tests passing
- [ ] Production build successful

---

## ✅ MVP Definition of Done

A feature is **DONE** when:

- [x] Code written and follows standards
- [x] Unit tests written (>80% coverage)
- [x] Integration tests pass
- [x] Email notifications working
- [x] Swagger documentation updated
- [x] Tested in staging
- [x] Code reviewed
- [x] Deployed to production

---

## 🎯 Post-MVP Enhancements (Optional)

### Phase 2 Features (If Needed)

- [ ] Add consultant assignment (can be email-based or add consultants table later)
- [ ] Add consultation booking (Calendly integration or add consultations table)
- [ ] Add review system (external platform or add reviews table)
- [ ] Add in-app notifications (add notifications table)
- [ ] Add email tracking (add email_logs table)
- [ ] Add audit logging (add audit_logs table)

### Current Approach (Email-Based)

- ✅ Admin gets email for new orders
- ✅ Admin assigns consultants via email
- ✅ Consultations scheduled via Calendly link in email
- ✅ Reviews collected via Google Forms link
- ✅ Notifications sent via email only
- ✅ No database tracking needed

---

## 📊 Comparison: Original vs Simplified

| Metric                  | Original Plan       | Simplified Plan    |
| ----------------------- | ------------------- | ------------------ |
| **Models**              | 16                  | 5                  |
| **Timeline**            | 12 weeks            | 8 weeks            |
| **Sprints**             | 12                  | 8                  |
| **Database Indexes**    | ~50                 | ~15                |
| **Email Tables**        | Yes (email_logs)    | No (Resend tracks) |
| **Notification Tables** | Yes (notifications) | No (email only)    |
| **Consultant System**   | Full DB tables      | Email-based        |
| **Complexity**          | High                | Low                |
| **Time to MVP**         | 6 weeks             | 4 weeks            |

**Reduction:** 68% fewer models, 33% faster development

---

## 🎓 Next Steps

1. **Week 1:** Start with authentication module
2. **Week 2:** Complete services module and seed data
3. **Week 3-4:** Build orders and payments
4. **Week 5-6:** Add documents and email
5. **Week 7:** Polish and deploy MVP
6. **Week 8:** Monitor and iterate

---

**Document Version:** 2.0 (Simplified)  
**Last Updated:** January 7, 2026  
**Aligned With:** 5-Model Database Schema  
**Status:** Production Ready for MVP

---

## 💡 Key Takeaways

### Why This Approach Works

1. ✅ **Faster MVP** - Get to market 33% faster
2. ✅ **Less complexity** - Easier to maintain and debug
3. ✅ **Email notifications** - Simple and reliable
4. ✅ **Admin flexibility** - Email-based workflows are flexible
5. ✅ **Scalable** - Can add more models later if needed

### What You're NOT Losing

- ❌ User experience (emails work great)
- ❌ Admin capabilities (email notifications are sufficient)
- ❌ Order tracking (still have full order management)
- ❌ Data insights (can add analytics later)

### What You're Gaining

- ✅ Speed to market
- ✅ Simpler codebase
- ✅ Easier maintenance
- ✅ Lower development cost
- ✅ Faster iteration

**Start building your MVP today!** 🚀
