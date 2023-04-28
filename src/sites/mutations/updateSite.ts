import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateSite = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
  description: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(UpdateSite),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const site = await db.link.update({ where: { id }, data })
    return site
  }
)
