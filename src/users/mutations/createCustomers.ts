import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { any, z } from "zod"

const CreateSiteWidget = z.object({
  userId: z.number(),
  email: z.string(),
  // sub_create: z.date(),
  // sub_end: z.string(),
  term: z.string(),
  stripe_results: z.any(),
  salutation: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  level: z.string(),
  user: z.number()
})

export default resolver.pipe(
  resolver.zod(CreateSiteWidget),
  resolver.authorize(),
  async (input: any, ctx) => {
    input["userId"] = ctx.session.userId;
    const site = await db.customer.create({ data: input })

    console.log("site", site)
    return site
  }
)
