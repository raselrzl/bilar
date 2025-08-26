import { PrismaClient } from "@prisma/client";
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;
const prisma =
  process.env.NODE_ENV === "production"
    ? prismaClientSingleton()
    : globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
