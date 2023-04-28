import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "../../../db"
import { z } from "zod"

const GetServices = z.object({
  id: z.number().optional().refine(Boolean, "Required"),
  name: z.string(),
})

export default resolver.pipe(resolver.zod(GetServices), resolver.authorize(), async ({}, ctx) => {
  const userId = ctx.session.userId
  const apps = await db.link.findMany({
    where: { userId },
  })

  console.log("apps", apps)
  return apps
})
