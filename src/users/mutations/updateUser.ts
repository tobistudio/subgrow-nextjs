import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"
import { Role } from "../../../types"
import { plansConfig } from '../../configs/plans.config';


const UpdateUser = z.object({
  id: z.number(),
  role: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateUser),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    const site = await db.user.update({ where: { id }, data })

    await ctx.session.$setPublicData({ role: data.role as Role });
    return site;
  }
)
