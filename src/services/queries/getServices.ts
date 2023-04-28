import { NotFoundError, paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "../../../db"
import { z } from "zod"

const GetServices = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
  name: z.string(),
})

export default resolver.pipe(resolver.zod(GetServices), resolver.authorize(), async ({}, ctx) => {
  const userId = ctx.session.userId
  const service = await db.link.findMany({
    // fields
    where: { userId },
  })

  console.log("service", service)
  return service
})
