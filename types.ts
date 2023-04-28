import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
// import { User } from "./db"
// import { User } from "./db/generated/prisma-client-js" / /creates serious blitz-serer error

/**
 * Model User
 * I have to put this here since using generated
 */
export type User = {
  id: any // FIXME: THIS FIXES SERIOUS BLITZ ERROR
  createdAt: Date
  updatedAt: Date
  username: string
  name: string | null
  email: string
  emailVerified: Date | null
  image: string | null
  balance: number | null
  hashedPassword: string | null
  role: string
  level: string | null
}

// export type Role = "ADMIN" | "USER"
export type Role = "LEVEL1" | "LEVEL2" | "LEVEL3" | "ADMIN" | "USER" | "MANAGER"

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
      username: string
    }
  }
}
