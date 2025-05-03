import { PrismaClient } from "./generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? (() => {
  try {
    const client = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
    client.$connect()
      .then(() => {
        console.log('Prisma Client connected');
      })
      .catch((e: any) => {
        console.error('Prisma Client connection error:', e);
      });
    return client;
  } catch (e: any) {
    console.error("Failed to initialize PrismaClient:", e);
    throw new Error(
      "PrismaClient initialization error. Ensure 'prisma generate' has been run."
    );
  }
})();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma;
