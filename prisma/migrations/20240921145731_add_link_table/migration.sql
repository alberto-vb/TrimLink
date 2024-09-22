-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "shortenedUrlId" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_shortenedUrlId_key" ON "Link"("shortenedUrlId");
