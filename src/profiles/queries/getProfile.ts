import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const yesno = ["yes", "no"] as const

// FIXME: string
const GetProfile = z.object({
  userId: z.number(),
  current: z.enum(yesno).default("yes"),
})

export default resolver.pipe(
  resolver.zod(GetProfile),
  // resolver.authorize(),
  async ({ userId, current }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const profile = await db.profile.findFirst({ where: { userId, current } })
    if (!profile) throw new NotFoundError()
    return profile
  }
)
