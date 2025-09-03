import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// Yeh code basically Prisma Client ko development mode me reuse karne ke liye likha gaya hai, taaki unnecessary multiple database connections na ban sake.

// globalThis.prisma → ek global variable jisme Prisma client instance store hoga.
// Agar globalThis.prisma already bana hua hai, to wahi reuse karega.
// Agar nahi bana hua, to new PrismaClient() se ek naya instance create karega.

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = db;
// }
// Ye sirf non-production (jaise development mode) me run hoga.

// Development me har baar hot-reload ke wajah se file dubara load hoti hai, aur normally naya PrismaClient ban jata hai → jo ki multiple DB connections open kar deta hai (problem).

// Is line se, once created, Prisma client instance globalThis me store ho jata hai aur har reload me wahi instance reuse hota hai.
