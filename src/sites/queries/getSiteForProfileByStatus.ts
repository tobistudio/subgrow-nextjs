import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const statusOptions = ["active", "archived", "inactive"] as const
const GetSiteForProfileByStatus = z.object({
  userId: z.number(),
  status: z.enum(statusOptions),
})

export default resolver.pipe(resolver.zod(GetSiteForProfileByStatus), async ({ userId, status }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const site = await db.site.findMany({
    where: {
      userId,
      status
    },
    orderBy: [
      {
        order: "asc",
      },
    ],
  })
  if (!site) throw new NotFoundError()
  return site
})
