import { Ctx } from "blitz"

export default async function logout(_: any, ctx: Ctx) {
  // TODO: fixme doesn't seem to remove user from session table!



  return await ctx.session.$revoke()
}
