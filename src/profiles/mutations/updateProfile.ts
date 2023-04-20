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
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const profile = await db.profile.update({ where: { id }, data })

    return profile
  }
)
