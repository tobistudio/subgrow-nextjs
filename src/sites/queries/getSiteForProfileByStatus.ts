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

  const site = await db.link.findMany({
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
