import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateLinkOrder = z.object({
  id: z.string(),
  source: z.string(),
  destination: z.string(),
  index: z.number(),
})

export default resolver.pipe(
  resolver.zod(UpdateLinkOrder),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant

    console.log("data", data)
    const site = await db.site.update({ where: { id }, data })
    console.log("site", site)
    return site
  }
)
