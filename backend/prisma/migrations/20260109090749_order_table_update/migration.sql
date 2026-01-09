/*
  Warnings:

  - The values [AWAITING_DOCS,UNDER_REVIEW,REFUNDED] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `adminNotes` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `cancelledAt` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `completedAt` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `isFeatured` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `longDescription` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `priceRange` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `sortOrder` on the `services` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');
ALTER TABLE "public"."orders" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "orders" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "public"."OrderStatus_old";
ALTER TABLE "orders" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- DropIndex
DROP INDEX "orders_createdAt_idx";

-- DropIndex
DROP INDEX "orders_orderNumber_idx";

-- DropIndex
DROP INDEX "orders_serviceId_idx";

-- DropIndex
DROP INDEX "services_isActive_idx";

-- DropIndex
DROP INDEX "services_isFeatured_idx";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "adminNotes",
DROP COLUMN "cancelledAt",
DROP COLUMN "completedAt",
DROP COLUMN "notes",
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "totalAmount" DROP NOT NULL,
ALTER COLUMN "serviceSnapshot" DROP NOT NULL;

-- AlterTable
ALTER TABLE "services" DROP COLUMN "category",
DROP COLUMN "isFeatured",
DROP COLUMN "longDescription",
DROP COLUMN "priceRange",
DROP COLUMN "sortOrder";

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
