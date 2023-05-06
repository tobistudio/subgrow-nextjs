import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const yesno = ["yes", "no"] as const

const GetThisUsersApps = z.object({
  userId: z.number(),
  site_name: z.string(),
  order: z.number().default(0),
  show_feed: z.enum(yesno).default("yes"),
  show_sub: z.enum(yesno).default("yes"),
})

export default resolver.pipe(resolver.zod(GetThisUsersApps), resolver.authorize(), async ({ userId, site_name }) => {

  const app = await db.apps.findMany({
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
      order: 0,
      // show_feed,
      // show_sub
    }

    return await db.apps.create({ data: input })


  }


  // if (!app) throw new NotFoundError()
  return app
})
