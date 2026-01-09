# Simplified Database Schema Summary - Holyone Travels

**Last Updated:** January 7, 2026  
**Status:** Cleaned & Production Ready

---

## ✅ What Was Simplified

### Removed Models (Handled via Email/Admin)

The following models were removed as their functionality will be handled through Resend email notifications to admin:

- ❌ **UserAddress** - Not needed, shipping/billing handled differently
- ❌ **UserPreference** - Email preferences managed externally
- ❌ **OrderStatusHistory** - Status tracking simplified
- ❌ **Consultant** - Consultant assignment handled via admin email
- ❌ **Consultation** - Consultation scheduling via external calendar/email
- ❌ **Review** - Reviews can be collected via external platform
- ❌ **EmailLog** - Email tracking handled by Resend
- ❌ **Notification** - In-app notifications sent via email instead
- ❌ **SystemSetting** - Config managed via environment variables
- ❌ **AuditLog** - Simplified audit through order notes
- ❌ **Referral** - Not needed for MVP

---

## 🎯 Core Models (Final Schema)

### 1. **User** - Customer & Admin Accounts

- Authentication (email/password)
- Role-based access (CUSTOMER, ADMIN)
- Profile information

### 2. **Service** - Service Catalog

- Main packages, micro services, digital products
- Pricing, features, specifications
- Active/inactive status

### 3. **Order** - Order Management

- Order tracking and lifecycle
- Customer information (JSON)
- Service details (JSON)
- Payment linking
- Document linking

### 4. **Payment** - Payment Processing

- Stripe integration
- Transaction tracking
- Refund management

### 5. **Document** - Document Upload

- File storage (Cloudinary)
- Categorization (passport, bank statement, etc.)
- Verification status (pending, verified, rejected)

---

## 📧 Email-Based Workflows

Instead of database tables, these will be handled via Resend email to admin:

### When Order is Created:

```
✉️ Email to Admin: New order #HT-2026-001234
   - Customer: John Doe
   - Service: Professional Visa Support
   - Amount: $300
   - Action: Assign consultant, schedule consultation
```

### When Document is Uploaded:

```
✉️ Email to Admin: Document uploaded for order #HT-2026-001234
   - Document: Passport copy
   - Uploaded by: John Doe
   - Action: Verify document
```

### When Order Status Changes:

```
✉️ Email to Customer: Order status updated
✉️ Email to Admin: Order #HT-2026-001234 moved to IN_PROGRESS
```

### Consultation Scheduling:

```
✉️ Email to Admin: Customer requests consultation
✉️ Admin replies with Calendly/Google Calendar link
```

---

## 🚀 Benefits of Simplified Schema

### ✅ Advantages

1. **Faster Development** - 5 models vs 16 models
2. **Easier Maintenance** - Less code to maintain
3. **Lower Complexity** - Simpler relationships
4. **Reduced Database Size** - Fewer tables and indexes
5. **Flexibility** - Email-based workflows are easier to change

### ⚠️ Trade-offs

1. **Manual Admin Work** - Admins manage consultations manually
2. **No Email Tracking** - Rely on Resend's dashboard
3. **No In-App Notifications** - Emails only
4. **Limited Analytics** - Less data for reporting

---

## 📊 Database Size Comparison

### Before (Original Schema)

- **16 models** (Users, Services, Orders, Payments, Documents, Consultants, Consultations, Reviews, EmailLogs, Notifications, UserAddress, UserPreference, OrderStatusHistory, SystemSettings, AuditLogs, Referrals)
- **~50+ database indexes**
- **8 enums**

### After (Simplified Schema)

- **5 models** (Users, Services, Orders, Payments, Documents)
- **~15 database indexes**
- **4 enums**

**Reduction:** 68% fewer models, 70% fewer indexes

---

## 🗂️ Final Entity Relationship

```
User
  ├─ Orders (many)
  └─ Documents (many)

Service
  └─ Orders (many)

Order
  ├─ User (one)
  ├─ Service (one)
  ├─ Payment (one)
  └─ Documents (many)

Payment
  └─ Order (one)

Document
  ├─ User (one)
  └─ Order (one, optional)
```

---

## ✅ Next Steps for Development

1. **Start with Milestone 1** in `backend_milestones.md`
2. Use the simplified 5-model schema from `database_schema.md`
3. Implement email notifications via Resend
4. Admin manages consultations via email/external calendar

---

**This simplified approach is perfect for MVP and can be extended later if needed!** 🚀
