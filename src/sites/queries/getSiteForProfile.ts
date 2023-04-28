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

  const site = await db.link.findMany({
    // fields
    where: { userId },
    orderBy: [
      {
        order: "asc",
      },
    ],
  })
  if (!site) throw new NotFoundError()
  return site
})
