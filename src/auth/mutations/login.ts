// import { SecurePassword } from "@blitzjs/auth"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { resolver } from "@blitzjs/rpc"
import { AuthenticationError } from "blitz"
import db from "../../../db"
import { Role } from "../../../types"
import { Login } from "../validations"

export const authenticateUser = async (rawEmail: string, rawPassword: string) => {
  const { email, password } = Login.parse({ email: rawEmail, password: rawPassword })
  const user = await db.user.findFirst({ where: { email } })
  if (!user) throw new AuthenticationError()

  const result = await SecurePassword.verify(user.hashedPassword, password)

  if (result === SecurePassword.VALID_NEEDS_REHASH) {
    // Upgrade hashed password with a more secure hash
    const improvedHash = await SecurePassword.hash(password)
    await db.user.update({ where: { id: user.id }, data: { hashedPassword: improvedHash } })
  }

  const { hashedPassword, ...rest } = user
  return rest
}

/**
 * Clear out any remaining sessions and renew
 * @param userId
 */
export const clearSession = async (userId) => {
  // return await db.session.delete({ where: { userId } })
  return await db.session.deleteMany({ where: { userId } })
}

export default resolver.pipe(resolver.zod(Login), async ({ email, password }, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password)

  // delete session entry for this user if exists even if login page will forward
  const session = await clearSession(user.id)

  //console.log("user session", session)
  await ctx.session.$create({ username: user.username, userId: user.id, role: user.role as Role })

  return user
})
