import { enhancePrisma } from "blitz"
// import { PrismaClient } from "@prisma/client"
import { PrismaClient } from './generated/prisma-client-js'
const EnhancedPrisma = enhancePrisma(PrismaClient)

export * from "@prisma/client"
const db = new EnhancedPrisma()
export default db
