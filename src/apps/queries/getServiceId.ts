import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetServiceId = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number(),
})

export default resolver.pipe(resolver.zod(GetServiceId), resolver.authorize(), async ({ id }) => {

  const service = await db.apps.findFirst({ where: { id } })

  if (!service) throw new NotFoundError()

  return service
})
