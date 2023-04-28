import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const UpdateProfile = z.object({
  id: z.string(),
  username: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateProfile),
  resolver.authorize(),
  async ({ id, ...data }) => {

    const profile = await db.profile.update({ where: { id }, data })

    return profile
  }
)
