import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { array, z } from "zod"

// TODO: type error
// https://github.com/blitz-js/legacy-framework/issues/163
// TODO: add fancy validation to check , or use custom inline validation on form itself
// TODO: Allow multiple usernames for a user,
const yesno = ["yes", "no"] as const

type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.record(jsonSchema)]))

const CreateProfile = z.object({
  // userId: z.number().int(),
  //userId: z.any(),
  userId: z.number(),
  username: z.string(),
  title: z.string(),
  description: z.string().optional(),
  theme: jsonSchema,
  widgets: z.string().optional(),
  current: z.enum(yesno).default("yes"),
  titleColor: z.string().optional(),
  descColor: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(CreateProfile),
  resolver.authorize(),
  async (input: any, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant

    //input["userId"] = ctx.session.userId
    // input.userId = ctx.session.userId
    //let input.userId: number = ctx.session.userId;
    //let id: string

    // let userId: number = ctx.session.userId
    // let userId: number = ctx.session.userId
    // let userId: string = ctx.session.userId as string
    let userId = ctx.session.userId

    console.log("ctx.session.userId", userId)
    // if this is set to current, then update db
    const update = await db.profile.updateMany({
      where: {
        userId: userId,
        username: input.username,
      },
      data: {
        current: "no",
      },
    })

    console.log("update", update)
    // let data: object
    const profile = await db.profile.create({ data: input })
    // const profile = await db.profile.create({
    //   // data: input
    //
    //   ...input,
    //   // userId: userId,
    //   // userId: userId as string,
    //   userId,
    // })

    return profile
  }
)
// <html>TS2322:
// Type '{ userId: string; username?: string; title?: string; description?: string; theme?: Json; widgets?: string; current?: &quot;yes&quot; | &quot;no&quot;; titleColor?: string; descColor?: string; }' is not assignable to type '(Without&lt;ProfileCreateInput, ProfileUncheckedCreateInput&gt; &amp; ProfileUncheckedCreateInput) | (Without&lt;...&gt; &amp; ProfileCreateInput)'.<br/>Type '{ userId: string; username?: string; title?: string; description?: string; theme?: Json; widgets?: string; current?: &quot;yes&quot; | &quot;no&quot;; titleColor?: string; descColor?: string; }' is not assignable to type 'Without&lt;ProfileUncheckedCreateInput, ProfileCreateInput&gt; &amp; ProfileCreateInput'.<br/>Type '{ userId: string; username?: string; title?: string; description?: string; theme?: Json; widgets?: string; current?: &quot;yes&quot; | &quot;no&quot;; titleColor?: string; descColor?: string; }' is not assignable to type 'Without&lt;ProfileUncheckedCreateInput, ProfileCreateInput&gt;'.<br/>
//
// Types of property 'userId' are incompatible.<br/>Type 'string' is not assignable to type 'never'.
