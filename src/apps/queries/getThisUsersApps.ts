import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetThisUsersApps = z.object({
  userId: z.number(),
})

export default resolver.pipe(resolver.zod(GetThisUsersApps), resolver.authorize(),async ({ userId }) => {

  const apps = await db.apps.findMany({
    where: { userId },
    orderBy: [
      {
        order: "asc",
      },
    ],
  })
  return apps
})
