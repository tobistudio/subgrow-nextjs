// @ts-nocheck
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const Update__ModelName__ = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(Update__ModelName__),
  resolver.authorize(),
  async ({ id, ...data }) => {

    const __modelName__ = await db.__modelName__.update({ where: { id }, data })

    return __modelName__
  }
)
