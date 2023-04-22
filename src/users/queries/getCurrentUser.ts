import { Ctx } from "blitz"
import db from "../../../db"

export default async function getCurrentUser(_ = null, { session }: Ctx) {
  if (!session.userId) return null

  const user = await db.user.findFirst({
    where: { id: session.userId },
    select: { id: true, name: true, username: true, email: true, role: true },
  })

  return user
}

//
//
// import { Ctx } from "blitz"
// import db from "../../../db"
//
// export declare type UserSelect = {
//   username: string
// }
//
// export default async function getCurrentUser(_ = null, { session }: Ctx) {
//   if (!session.userId) return null
//
//   //console.log("getCurrent session", session.username)
//
//   const user = await db.user.findFirst({
//     where: { id: session.userId },
//     // where: { id: session.userId as string},
//     // select: { id: true, name: true, username: true, email: true, role: true },
//   })
//   // console.log("getCurrentUser session.userId", user)
//   return user
// }
