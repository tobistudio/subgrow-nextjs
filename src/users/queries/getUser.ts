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

const GetUser = z.object({
  // username: z.string().optional(),
  userId: z.number(),
})

export default resolver.pipe(resolver.zod(GetUser), resolver.authorize(), async ({ userId }) => {
  const user = await db.user.findFirst({
    where: { id: userId },
    // select: { id: true, name: true, email: true, role: true },
  })
})
