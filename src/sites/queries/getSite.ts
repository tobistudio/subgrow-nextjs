import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetSite = z.object({
  // This accepts type of undefined, but is required at runtime
  // id: z.number().optional().refine(Boolean, "Required"),
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetSite), resolver.authorize(), async ({ id }) => {



  console.log("id",id);
  const site = await db.link.findFirst({ where: { id } })


  if (!site) throw new NotFoundError()

  return site
})
