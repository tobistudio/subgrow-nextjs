import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const CreateSiteWidget = z.object({
  title: z.string(),
  url: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateSiteWidget),
  resolver.authorize(),
  async (input: any, ctx) => {
    //input["userId"] = ctx.session.userId as string
    input["userId"] = ctx.session.userId
    console.log("create site input", input)
    const site = await db.link.create({ data: input })

    console.log("site", site)
    return site
  }
)
