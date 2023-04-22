import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const CreateSite = z.object({
  // userId: z.number().int().nullish(), // TODO: FIXME: string
  //userId: z.number(),
  title: z.string(),
  url: z.string(),
  description: z.string().optional(),
  api_key: z.string().optional(),
  api_secret: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(CreateSite),
  resolver.authorize(),
  async (input: any, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant

    // FIXME: string
    //input["userId"] = ctx.session.userId as string
    input["userId"] = ctx.session.userId

    console.log("create site input", input)

    // const data: Array<any> = [];
    const site = await db.site.create({ data: input })
    // const site = await db.site.create({ ...input })
    // const site = await db.site.create({ ...input })

    console.log("site", site)
    return site
  }
)

// TODO: TS ERROR
/*
sites/mutations/createSite.ts:22:39 - error TS2322: Type '{ userId?: string; name?: string; url?: string; description?: string; api_key?: string; api_secret?: string; }' is not assignable to type '(Without<SiteCreateInput, SiteUncheckedCreateInput> & SiteUncheckedCreateInput) | (Without<...> & SiteCreateInput)'.
  Type '{ userId?: string; name?: string; url?: string; description?: string; api_key?: string; api_secret?: string; }' is not assignable to type 'Without<SiteUncheckedCreateInput, SiteCreateInput> & SiteCreateInput'.
    Type '{ userId?: string; name?: string; url?: string; description?: string; api_key?: string; api_secret?: string; }' is not assignable to type 'Without<SiteUncheckedCreateInput, SiteCreateInput>'.
      Types of property 'userId' are incompatible.
        Type 'string' is not assignable to type 'never'.

22   const site = await db.site.create({ data: input })

 */

/*
export default resolver.pipe(
  resolver.zod(CreateDetail),
  resolver.authorize(),
  async (input, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant

    input["userId"] = ctx.session.userId

    console.log("Data", input)

    const detail = await db.detail.create({ data: input })

    return detail
  }
)

 */
