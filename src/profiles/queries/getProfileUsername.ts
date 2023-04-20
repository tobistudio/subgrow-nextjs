import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const yesno = ["yes", "no"] as const

const GetProfileUsername = z.object({
  // This accepts type of undefined, but is required at runtime
  // id: z.number().optional().refine(Boolean, "Required"),
  //id: z.string().optional().refine(Boolean, "Required"),
  username: z.string(),
  current: z.enum(yesno).default("yes"),
})

// TODO: should not have to be logged in to get to a profile

export default resolver.pipe(resolver.zod(GetProfileUsername), async ({ username, current }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
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
//     // TODO: in multi-tenant app, you must add validation to ensure correct tenant
//     const profile = await db.profile.findFirst({ where: { username, current } })
//     if (!profile) throw new NotFoundError()
//     return profile
//   }
// )
