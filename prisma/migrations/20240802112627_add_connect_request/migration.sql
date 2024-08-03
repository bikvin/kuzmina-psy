-- CreateTable
CREATE TABLE "ConnectRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contacts" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConnectRequest_pkey" PRIMARY KEY ("id")
);
