import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const DeleteProfile = z.object({
  id: z.string(),
})

export default resolver.pipe(resolver.zod(DeleteProfile), resolver.authorize(), async ({ id }) => {

  const profile = await db.profile.deleteMany({ where: { id } })

  return profile
})
