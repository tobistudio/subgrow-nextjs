import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const DeleteSite = z.object({
  id: z.string(),
})

export default resolver.pipe(resolver.zod(DeleteSite), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant

  const site = await db.site.delete({ where: { id } })

  return site
})
