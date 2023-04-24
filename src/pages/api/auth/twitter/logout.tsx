import { api } from "../../../../blitz-server"
import passport from "passport"

// TODO: handle actual logout, session, cookies, etc
export default api(async (_req, res, ctx) => {
  const auth2 = ctx.session.$isAuthorized

  const results = await ctx.session.$revoke()

  // const auth = ctx.session.$authorize();
  // const publicData = ctx.session.$publicData;

  res.status(401).json({
    success: true,
    results: results,
    message: "User logged out.",
  })
})
