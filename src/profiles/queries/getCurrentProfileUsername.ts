import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const yesno = ["yes", "no"] as const

const GetCurrentProfileUsername = z.object({
  username: z.string(),
  current: z.enum(yesno).default("yes"),
})

// TODO: should not have to be logged in to get to a profile
export default resolver.pipe(resolver.zod(GetCurrentProfileUsername), async ({ username, current }) => {

  const profile = await db.profile.findFirst({ where: { username, current } })
  if (!profile) throw new NotFoundError()
  return profile
})

// export default resolver.pipe(resolver.zod(ForgotPassword), async ({ email }) => {
// 1. Get the user

// export default resolver.pipe(
//   resolver.zod(GetProfileUsername),
//   resolver.authorize(),
//   async ({ userId, current }) => {
//
//     const profile = await db.profile.findFirst({ where: { username, current } })
//     if (!profile) throw new NotFoundError()
//     return profile
//   }
// )
