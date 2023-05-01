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
    let Role = "";
    Role = Object.keys(plansConfig).filter(ele => ele === data.role);
    console.log(Role);

    await ctx.session.$setPublicData({ role: Role });
    return site;
  }
)