import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateLinkOrder = z.object({
  id: z.string(),
  // source: z.string(),
  // destination: z.string(),
  order: z.number(), // TODO: fiver this needs to be the index from drag drop
})

export default resolver.pipe(
  resolver.zod(UpdateLinkOrder),
  resolver.authorize(),
  async ({ id, ...data }) => {
    console.log("data", data)
    const site = await db.site.update({ where: { id }, data })
    console.log("site", site)
    return site
  }
)
