import { PrismaClient } from "@prisma/client";

// Singleton pattern to prevent multiple instances in serverless environments like Vercel
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

// Use a global variable for development to reuse the Prisma client instance
// In production (serverless), Prisma client will be created only once per invocation
const prisma = 
  process.env.NODE_ENV === "production"
    ? prismaClientSingleton()
    : globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
