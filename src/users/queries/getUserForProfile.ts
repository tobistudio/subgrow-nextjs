import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

// export default resolver.pipe(
//   resolver.zod(UpdateProfile),
//   resolver.authorize(),
//   async ({ id, ...data }) => {
//     // TODO: in multi-tenant app, you must add validation to ensure correct tenant
//     const profile = await db.profile.update({ where: { id }, data })
//
//     return profile
//   }
// )

const GetUserForProfile = z.object({
  // username: z.string().optional(),
  username: z.string(),
})

// export default resolver.pipe(resolver.zod(GetUser), async ({ username }) => {
//   // TODO: in multi-tenant app, you must add validation to ensure correct tenant
//
//   console.log("getUser username", username)
//
//   const user = await db.user.findFirst({ where: { username } })
//
//   if (!user) throw new NotFoundError()
//
//   return user
// })

// no authorize for this
export default resolver.pipe(
  resolver.zod(GetUserForProfile),
  // resolver.authorize(),
  async ({ username }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    // @ts-ignore
    const user = await db.user.findFirst({ where: { username } })
    console.log("user", user)
    if (!user) throw new NotFoundError()
    return user
  }
)
