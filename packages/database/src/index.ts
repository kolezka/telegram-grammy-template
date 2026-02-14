import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

export function createPrismaClient(DATABASE_URL: string) {
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is required");
  }

  const adapter = new PrismaPg({
    connectionString: DATABASE_URL,
  });

  return new PrismaClient({
    adapter,
  });
}

export * from "./generated/prisma/client";