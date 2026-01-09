# Forgot Password Implementation Guide

This guide outlines the step-by-step milestones to implement the "Forgot Password" functionality for the Holyone Travels backend. This feature requires updates to the database, a new email service (if not already implemented), and authentication logic.

## 📋 Overview

The process follows a standard secure password reset flow using a separate token entity:

1.  **Request**: User submits email.
2.  **Token Creation**: System generates a secure token and creates a record in the `Token` table linked to the user.
3.  **Email**: System sends an email with a reset link containing the token.
4.  **Reset**: User clicks the link (frontend) -> calls backend with token + new password.
5.  **Update**: Backend verifies token validity and expiry from the `Token` table, updates user's password, and deletes the token.

---

## 🚀 Milestones

### 📦 Milestone 1: Database Updates (Prisma)

We will create a dedicated `Token` model to handle ephemeral data like reset tokens, keeping the `User` model clean.

- [ ] **1.1 Add `Token` Model**

  - Update `prisma/schema.prisma` to add:

    ```prisma
    model Token {
      id        String    @id @default(uuid())
      token     String    @unique // The actual token string
      type      TokenType // RESET_PASSWORD, EMAIL_VERIFICATION, etc.
      expiresAt DateTime
      userId    String
      user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
      createdAt DateTime  @default(now())

      @@index([userId])
    }

    enum TokenType {
      RESET_PASSWORD
      EMAIL_VERIFICATION
    }
    ```

  - Update `User` model to include the relation:
    ```prisma
    tokens Token[]
    ```
  - Run migration: `npx prisma migrate dev --name add_token_model`

### 📧 Milestone 2: Email Module Setup

_Note: If Milestone 6 (Email Service) from `backend_milestones.md` is already complete, skip to 2.3._

- [ ] **2.1 Install Dependencies**
  - `npm install @nestjs-modules/mailer nodemailer handlebars` (or Resend SDK as per main guide)
- [ ] **2.2 Configure Mail Service**
  - Ensure `MailModule` is set up.
- [ ] **2.3 Create Reset Email Template**
  - Create a template that accepts `name` and `url`.

### 🔐 Milestone 3: Auth Module Updates

- [ ] **3.1 Create DTOs**
  - `src/auth/dto/forgot-password.dto.ts` (email)
  - `src/auth/dto/reset-password.dto.ts` (token, newPassword)
- [ ] **3.2 Update `AuthService`**
  - Implement `forgotPassword(email: string)`:
    - Find user by email.
    - **Clean up**: Delete any existing valid tokens of type `RESET_PASSWORD` for this user to prevent clutter.
    - Generate random token.
    - **Create Token**: Save to `Token` table with `expiresAt` (e.g., +1 hour).
    - Call `MailService`.
  - Implement `resetPassword(dto: ResetPasswordDto)`:
    - **Find Token**: Query `db.token.findUnique({ where: { token } })`.
    - Validate: Check if exists and if `expiresAt` > now.
    - If invalid/expired: Throw exception.
    - **Update User**: Find linked user, hash new password, save to `User` table.
    - **Cleanup**: Delete the used token.
- [ ] **3.3 Update `AuthController`**
  - Add endpoints for the above service methods.

### 🧪 Milestone 4: Verification

- [ ] **4.1 Manual Testing**
  - Request reset -> Check `Token` table has new record.
  - Reset password -> Check `User` password updated AND `Token` record deleted.

---

## 🛠 Detailed Implementation Snippets

### 1. Database Schema (`prisma/schema.prisma`)

```prisma
model Token {
  id        String    @id @default(uuid())
  token     String    @unique
  expiresAt DateTime
  userId    String
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt DateTime  @default(now())

  @@index([userId])
}
```

### 2. Auth Service Logic

```typescript
async forgotPassword(email: string) {
  const user = await this.db.user.findUnique({ where: { email } });
  if (!user) {
    // Return success to avoid email enumeration attacks
    return { message: 'If matches an account, email sent' };
  }

  // 1. Delete old tokens
  await this.db.token.deleteMany({
    where: { userId: user.id } // Optionally filter by type
  });

  // 2. Create new token
  const tokenString = crypto.randomUUID();
  await this.db.token.create({
    data: {
      token: tokenString,
      userId: user.id,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
    },
  });

  // 3. Send email...
}
```
