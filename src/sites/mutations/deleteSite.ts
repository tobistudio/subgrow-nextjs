import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const DeleteSite = z.object({
  id: z.string(),
})

export default resolver.pipe(resolver.zod(DeleteSite), resolver.authorize(), async ({ id }) => {


  const site = await db.link.delete({ where: { id } })

  return site
})
