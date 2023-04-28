import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetProfileForEdit = z.object({
  // This fixes a type error src/pages/profiles/[profileId]/edit.tsx:24:7 - error TS2769: No overload matches this call.
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetProfileForEdit),
  // resolver.authorize(),
  async ({ id }) => {

    const profile = await db.profile.findFirst({ where: { id } })
    if (!profile) throw new NotFoundError()
    return profile
  }
)
