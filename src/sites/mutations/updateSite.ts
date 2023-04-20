import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateSite = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  api_key: z.string(),
  api_secret: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateSite),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const site = await db.site.update({ where: { id }, data })

    return site
  }
)
