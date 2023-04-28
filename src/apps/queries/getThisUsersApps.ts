import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetThisUsersApps = z.object({
  userId: z.number(),
  site_name: z.string(),
})

export default resolver.pipe(resolver.zod(GetThisUsersApps), resolver.authorize(),async ({ userId, site_name }) => {

  const app = await db.apps.findFirst({
    where: { userId, site_name },
    orderBy: [
      {
        order: "asc",
      },
    ],
  })

  // const site_name = 'facebook'



  // then let's create one and return
  if (!app) {

    const input = {
      userId,
      site_name,

    }

    const app = await db.apps.create({ data: input })


  }


  // if (!app) throw new NotFoundError()
  return app
})
