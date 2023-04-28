import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetSiteForProfile = z.object({
  userId: z.number(),
})

export default resolver.pipe(resolver.zod(GetSiteForProfile), async ({ userId }) => {

  const link = await db.link.findMany({
    where: { userId },
    orderBy: [
      {
        order: "asc",
      },
    ],
  })
  if (!link) throw new NotFoundError()
  return link
})
