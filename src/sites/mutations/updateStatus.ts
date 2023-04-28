import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateLinkOrder = z.object({
  id: z.string(),
  status: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateLinkOrder),
  resolver.authorize(),
  async ({ id, ...data }: any) => {
    const site = await db.link.update({ where: { id }, data })
    return site
  }
)
