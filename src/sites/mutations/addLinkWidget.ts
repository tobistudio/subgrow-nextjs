import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const AddLinkWidget = z.object({
  // userId: z.number().int().nullish(), // TODO: FIXME: string
  //userId: z.number(),
  title: z.string(),
  url: z.string().url(),
})

export default resolver.pipe(
  resolver.zod(AddLinkWidget),
  resolver.authorize(),
  async (input: any, ctx) => {
    // FIXME: string
    //input["userId"] = ctx.session.userId as string
    input["userId"] = ctx.session.userId

    console.log("addLinkWidget.ts input", input)

    // const data: Array<any> = [];
    const site = await db.link.create({ data: input })
    // const site = await db.link.create({ ...input })
    // const site = await db.link.create({ ...input })

    console.log("site", site)
    return site
  }
)
