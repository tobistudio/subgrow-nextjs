import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateUser = z.object({
  id: z.number(),
  role: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateUser),
  resolver.authorize(),
  async ({ id, ...data }) => {
    const site = await db.user.update({ where: { id }, data })
    return site
  }
)
