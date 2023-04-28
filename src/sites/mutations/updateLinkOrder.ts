import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateLinkOrder = z.object({
  id: z.string(),
  order: z.number(),
})

export default resolver.pipe(
  resolver.zod(UpdateLinkOrder),
  resolver.authorize(),
  async ({ id, ...data }) => {
    console.log("data", data)
    const site = await db.link.update({ where: { id }, data })
    console.log("site", site)
    return site
  }
)
