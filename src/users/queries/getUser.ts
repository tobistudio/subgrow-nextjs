import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

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
