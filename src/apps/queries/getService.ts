import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetService = z.object({
  // This accepts type of undefined, but is required at runtime
  userId: z.number(),
})

export default resolver.pipe(resolver.zod(GetService), resolver.authorize(), async ({ userId }) => {

  const service = await db.apps.findFirst({ where: { userId } })

  if (!service) throw new NotFoundError()

  return service
})
