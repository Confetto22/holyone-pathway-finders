# Service Purchase User Flow

## Overview
This document outlines the complete user journey from viewing service details to completing a purchase on HolyOne Travels platform.

---

## User Flow Steps

### 1. Service Discovery & Details View ✅ *Currently Implemented*

**Current Implementation:**
- User lands on service detail page (`/services/[id]`)
- Views comprehensive service information:
  - Service title and description
  - Pricing with discounts
  - Image gallery
  - Service specifications (accommodation, meals, transportation, etc.)
- Two primary CTAs available:
  - "Check Availability" button
  - "Submit an Enquiry" button
- Additional "Customize Package" option in sidebar

**Files:**
- [`app/services/[id]/page.tsx`](file:///Users/confetto22/Desktop/Programming/Freelance/holyone-travels/app/services/%5Bid%5D/page.tsx)
- [`components/services-page/ServiceSidebar.tsx`](file:///Users/confetto22/Desktop/Programming/Freelance/holyone-travels/components/services-page/ServiceSidebar.tsx)

---

### 2. Availability Check 🔨 *Needs Implementation*

**User Actions:**
- Clicks "Check Availability" button
- Modal/drawer opens with availability checker

**Required Inputs:**
- Service/travel dates (date range picker)
- Number of participants/people
- Special requirements (optional)

**System Response:**
- Checks real-time availability against booking calendar
- Shows available slots or suggests alternative dates
- Displays dynamic pricing based on selected dates and group size
- "Proceed to Booking" CTA if available

**Components to Build:**
- `AvailabilityModal.tsx` - Modal wrapper
- `DateRangePicker.tsx` - Date selection component
- `ParticipantSelector.tsx` - Counter for number of people
- API endpoint: `/api/availability/check`

---

### 3. Booking Form 🔨 *Needs Implementation*

**User Actions:**
- Proceeds from availability check to booking form
- Fills out multi-step form

**Form Steps:**

#### Step 1: Personal Information
- Full name
- Email address
- Phone number
- Country/region

#### Step 2: Participant Details
- Lead traveler information
- Additional participants (if group booking)
- Age groups (adults/children)
- Special requirements (dietary, accessibility, etc.)

#### Step 3: Emergency Contact
- Emergency contact name
- Emergency contact phone
- Relationship

**Features:**
- Real-time validation
- Progress indicator
- Save draft functionality
- Back/Next navigation
- Form persistence (localStorage)

**Components to Build:**
- `BookingForm.tsx` - Main form container
- `FormStepIndicator.tsx` - Progress tracker
- `PersonalInfoStep.tsx`
- `ParticipantDetailsStep.tsx`
- `EmergencyContactStep.tsx`
- Form validation with Zod schema

---

### 4. Package Customization 🔨 *Needs Implementation*

**User Actions:**
- Optional step for users who clicked "Customize Package"
- Selects add-ons and upgrades

**Customization Options:**

#### Add-ons Catalog
- Extra activities/excursions
- Accommodation upgrades (standard → deluxe → luxury)
- Meal plan options (breakfast only → half board → full board)
- Transportation upgrades (shared → private)
- Travel insurance
- Photography packages
- Special celebrations (birthdays, anniversaries)

**Features:**
- Visual card-based selection
- Dynamic price calculation
- Real-time total update
- Comparison view (before/after)
- Recommended add-ons based on service type

**Components to Build:**
- `CustomizationBuilder.tsx` - Main customization interface
- `AddonCard.tsx` - Individual add-on display
- `PriceCalculator.tsx` - Dynamic pricing component
- `ComparisonView.tsx` - Package comparison
- API endpoint: `/api/addons/list`

---

### 5. Review & Summary 🔨 *Needs Implementation*

**Display Elements:**

#### Booking Summary
- Service name and type
- Selected dates (start - end)
- Duration
- Number of participants
- Participant names

#### Customizations
- List of selected add-ons
- Upgrades chosen
- Special requests

#### Price Breakdown
```
Base Price:           $1,200.00
Add-ons:              $  150.00
Accommodation Upgrade: $  200.00
Subtotal:             $1,550.00
Tax (10%):            $  155.00
Discount (Early Bird): -$ 100.00
─────────────────────────────
Total:                $1,605.00
```

#### Legal & Policies
- Terms & conditions checkbox
- Cancellation policy display
- Privacy policy link
- Refund policy

**User Actions:**
- Review all details
- Edit any section (back to previous steps)
- Accept terms & conditions
- Proceed to payment

**Components to Build:**
- `BookingSummary.tsx` - Summary display
- `PriceBreakdown.tsx` - Itemized pricing
- `PolicyDisplay.tsx` - T&C and policies
- `EditButton.tsx` - Quick edit navigation

---

### 6. Payment Processing 🔨 *Needs Implementation*

**Payment Options:**

#### Payment Methods
1. **Credit/Debit Card**
   - Visa, Mastercard, Amex
   - Secure card input (Stripe Elements)
   
2. **Digital Wallets**
   - PayPal
   - Apple Pay
   - Google Pay

3. **Bank Transfer**
   - Direct bank transfer
   - Wire transfer instructions

4. **Installment Plans** (for high-value services)
   - 3-month plan
   - 6-month plan
   - 12-month plan

**Security Features:**
- SSL encryption indicators
- PCI DSS compliance badges
- Secure payment gateway (Stripe/PayPal)
- 3D Secure authentication
- CVV verification

**Payment Flow:**
1. Select payment method
2. Enter payment details
3. Verify billing address
4. Review final amount
5. Process payment
6. Handle payment status (success/failure/pending)

**Components to Build:**
- `PaymentPage.tsx` - Main payment container
- `PaymentMethodSelector.tsx` - Payment method tabs
- `StripePaymentForm.tsx` - Stripe integration
- `PayPalButton.tsx` - PayPal integration
- `InstallmentCalculator.tsx` - Payment plan display
- `SecurityBadges.tsx` - Trust indicators
- API endpoints:
  - `/api/payment/create-intent`
  - `/api/payment/confirm`
  - `/api/payment/webhook`

---

### 7. Confirmation 🔨 *Needs Implementation*

**Success Page Elements:**

#### Confirmation Details
- ✅ Booking confirmed message
- Unique booking reference number (e.g., `HT-2025-001234`)
- QR code for booking
- Estimated confirmation email time

#### Booking Summary
- Service details
- Travel dates
- Participants
- Total paid
- Payment method used

#### Next Steps
1. Check email for detailed confirmation
2. Download booking confirmation PDF
3. Add to calendar (iCal/Google Calendar)
4. Review pre-travel checklist
5. Contact support if needed

#### Quick Actions
- 📧 Resend confirmation email
- 📄 Download invoice/receipt
- 📅 Add to calendar
- 💬 Contact support
- 🏠 Return to homepage
- 📊 View booking in dashboard

**Email Confirmation Includes:**
- Booking reference
- Service details
- Payment receipt
- Cancellation policy
- Contact information
- Pre-travel checklist (for travel services)
- What to bring
- Meeting point/pickup details

**Components to Build:**
- `ConfirmationPage.tsx` - Success page
- `BookingReference.tsx` - Reference number display
- `QRCode.tsx` - QR code generator
- `DownloadButtons.tsx` - PDF/calendar downloads
- `NextSteps.tsx` - Action items list
- Email templates (Resend/SendGrid)
- PDF generator (react-pdf)

---

### 8. Post-Purchase Experience 🔨 *Needs Implementation*

**User Dashboard:**

#### My Bookings Section
- Upcoming bookings
- Past bookings
- Cancelled bookings
- Booking details view
- Modify booking option
- Cancel booking option

#### Booking Management
- View full itinerary
- Download documents
- Add travelers
- Update contact information
- Request changes
- Submit reviews (post-service)

**Email Automation:**

1. **Immediate** - Booking confirmation
2. **24 hours** - Welcome email with tips
3. **7 days before** - Pre-travel reminder
4. **3 days before** - Final details and checklist
5. **1 day before** - Pickup/meeting point confirmation
6. **After service** - Review request
7. **1 week after** - Follow-up and recommendations

**Components to Build:**
- `UserDashboard.tsx` - Main dashboard
- `BookingsList.tsx` - Bookings overview
- `BookingDetails.tsx` - Individual booking view
- `ModifyBooking.tsx` - Modification interface
- `CancelBooking.tsx` - Cancellation flow
- `ReviewForm.tsx` - Post-service review
- Email automation service
- API endpoints:
  - `/api/bookings/user`
  - `/api/bookings/[id]`
  - `/api/bookings/[id]/modify`
  - `/api/bookings/[id]/cancel`

---

## Implementation Priorities

### 🔴 Priority 1: Core Booking Flow (MVP)

**Must-Have Features:**
1. ✅ Service details page (already implemented)
2. Availability checker modal
3. Basic booking form (personal info only)
4. Payment integration (Stripe)
5. Confirmation page
6. Email confirmation

**Estimated Timeline:** 2-3 weeks

**Tech Stack:**
- Forms: React Hook Form + Zod
- Payment: Stripe SDK
- Email: Resend
- Database: PostgreSQL + Prisma

---

### 🟡 Priority 2: Enhanced Features

**Nice-to-Have Features:**
1. Package customization builder
2. Multi-step booking form
3. User dashboard
4. Booking management
5. Multiple payment methods
6. Installment plans

**Estimated Timeline:** 3-4 weeks

**Additional Tech:**
- State Management: Zustand
- Date Picker: react-day-picker
- PDF Generation: react-pdf
- Calendar: ical-generator

---

### 🟢 Priority 3: Advanced Features

**Future Enhancements:**
1. Real-time availability calendar
2. Dynamic pricing engine
3. Advanced customization options
4. Loyalty program integration
5. Multi-currency support
6. Live chat support
7. Mobile app
8. Social sharing features

**Estimated Timeline:** 4-6 weeks

---

## Technical Architecture

### Frontend Components Structure
```
components/
├── booking/
│   ├── AvailabilityModal.tsx
│   ├── BookingForm.tsx
│   ├── FormStepIndicator.tsx
│   ├── PersonalInfoStep.tsx
│   ├── ParticipantDetailsStep.tsx
│   └── EmergencyContactStep.tsx
├── customization/
│   ├── CustomizationBuilder.tsx
│   ├── AddonCard.tsx
│   ├── PriceCalculator.tsx
│   └── ComparisonView.tsx
├── payment/
│   ├── PaymentPage.tsx
│   ├── PaymentMethodSelector.tsx
│   ├── StripePaymentForm.tsx
│   ├── PayPalButton.tsx
│   └── SecurityBadges.tsx
├── confirmation/
│   ├── ConfirmationPage.tsx
│   ├── BookingReference.tsx
│   ├── QRCode.tsx
│   └── DownloadButtons.tsx
└── dashboard/
    ├── UserDashboard.tsx
    ├── BookingsList.tsx
    ├── BookingDetails.tsx
    └── ModifyBooking.tsx
```

### Backend API Routes
```
app/api/
├── availability/
│   └── check/route.ts
├── bookings/
│   ├── create/route.ts
│   ├── [id]/route.ts
│   ├── [id]/modify/route.ts
│   └── [id]/cancel/route.ts
├── payment/
│   ├── create-intent/route.ts
│   ├── confirm/route.ts
│   └── webhook/route.ts
├── addons/
│   └── list/route.ts
└── email/
    └── send/route.ts
```

### Database Schema (Prisma)
```prisma
model Booking {
  id                String   @id @default(cuid())
  bookingReference  String   @unique
  userId            String
  serviceId         Int
  startDate         DateTime
  endDate           DateTime
  participants      Int
  status            BookingStatus
  totalAmount       Decimal
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  user              User     @relation(fields: [userId], references: [id])
  payment           Payment?
  participants      Participant[]
  addons            BookingAddon[]
}

model Payment {
  id              String        @id @default(cuid())
  bookingId       String        @unique
  amount          Decimal
  currency        String        @default("USD")
  status          PaymentStatus
  paymentMethod   String
  stripePaymentId String?
  createdAt       DateTime      @default(now())
  
  booking         Booking       @relation(fields: [bookingId], references: [id])
}

model Participant {
  id          String   @id @default(cuid())
  bookingId   String
  name        String
  age         Int?
  email       String?
  phone       String?
  
  booking     Booking  @relation(fields: [bookingId], references: [id])
}

enum BookingStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
}

enum PaymentStatus {
  PENDING
  PROCESSING
  SUCCEEDED
  FAILED
  REFUNDED
}
```

---

## Security & Compliance

### Payment Security
- ✅ PCI DSS Level 1 compliance (via Stripe)
- ✅ SSL/TLS encryption
- ✅ Tokenization (no card data stored)
- ✅ 3D Secure authentication
- ✅ Fraud detection

### Data Protection
- ✅ GDPR compliance
- ✅ Data encryption at rest
- ✅ Secure session management
- ✅ Rate limiting on APIs
- ✅ Input validation & sanitization

### Best Practices
- Environment variables for secrets
- API key rotation
- Regular security audits
- Error logging (Sentry)
- Backup strategy

---

## Testing Strategy

### Unit Tests
- Form validation logic
- Price calculation functions
- Date availability checks
- Payment processing logic

### Integration Tests
- Booking flow end-to-end
- Payment gateway integration
- Email delivery
- Database operations

### E2E Tests (Playwright/Cypress)
- Complete user journey
- Payment scenarios
- Error handling
- Mobile responsiveness

---

## Performance Optimization

### Frontend
- Code splitting by route
- Lazy loading components
- Image optimization (Next.js Image)
- Caching strategies
- Debounced API calls

### Backend
- Database indexing
- Query optimization
- Caching (Redis)
- Rate limiting
- CDN for static assets

---

## Next Steps

1. **Review this flow** with stakeholders
2. **Choose Priority 1 features** to implement first
3. **Set up development environment**
   - Database (PostgreSQL)
   - Stripe account (test mode)
   - Email service (Resend)
4. **Create detailed implementation plan**
5. **Begin development** with availability checker
6. **Iterate and test** each component
7. **Deploy to staging** for testing
8. **Launch MVP** with core features

---

## Questions to Consider

1. **Payment Processing:**
   - Which payment providers to support initially?
   - Will you offer installment plans?
   - What currencies to support?

2. **Booking Policies:**
   - Cancellation policy (free cancellation period)?
   - Refund policy?
   - Modification policy?
   - Deposit requirements?

3. **Business Logic:**
   - Minimum/maximum participants per booking?
   - Lead time for bookings (how far in advance)?
   - Peak season pricing?
   - Group discounts?

4. **User Experience:**
   - Guest checkout or login required?
   - Save payment methods for future use?
   - Booking on behalf of others?
   - Gift bookings?

---

**Document Version:** 1.0  
**Last Updated:** December 25, 2025  
**Author:** Antigravity AI Assistant
