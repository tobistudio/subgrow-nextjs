import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetSiteForProfile = z.object({
  // id: z.string().optional().refine(Boolean, "Required"),
  // userId: z.number().int(),
  userId: z.number(),
})

export default resolver.pipe(resolver.zod(GetSiteForProfile), async ({ userId }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const site = await db.site.findMany({
    // fields
    where: { userId },
  })
  if (!site) throw new NotFoundError()
  return site
})
