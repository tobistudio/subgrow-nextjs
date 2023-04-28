// @ts-nocheck
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const Delete__ModelName__ = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(Delete__ModelName__),
  resolver.authorize(),
  async ({ id }) => {

    const __modelName__ = await db.__modelName__.deleteMany({ where: { id } })

    return __modelName__
  }
)
