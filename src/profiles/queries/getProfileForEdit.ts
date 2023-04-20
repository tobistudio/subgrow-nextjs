import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const GetProfileForEdit = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
  //id: z.string().optional().refine(Boolean, "Required"),
})

// Get by id, for edits
export default resolver.pipe(resolver.zod(GetProfileForEdit), async ({ id: string }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant

  // Overload 1 of 2, '(queryFn: (input: { id?: string | undefined; }, ctx: Ctx) => Promise<Site>, params: { id?: string | undefined; }, options?: (UseQueryOptions<Site, unknown, Site, QueryKey> & QueryNonLazyOptions) | undefined): [...]', gave the following error.
  //   Type 'number | undefined' is not assignable to type 'string | undefined'.
  //   Type 'number' is not assignable to type 'string'.
  //   Overload 2 of 2, '(queryFn: (input: { id?: string | undefined; }, ctx: Ctx) => Promise<Site>, params: { id?: string | undefined; }, options: UseQueryOptions<Site, unknown, Site, QueryKey> & QueryLazyOptions): [...]', gave the following error.
  //   Type 'number | undefined' is not assignable to type 'string | undefined'.
  //
  // let id: any
  let id: string

  const profile = await db.profile.findFirst({ where: { id } })

  if (!profile) throw new NotFoundError()

  return profile
})
