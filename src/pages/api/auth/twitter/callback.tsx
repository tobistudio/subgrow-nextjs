import { api } from "blitz-server"
import passport from "passport"
// import db from "../../db"
// import { Ctx } from "blitz"

// http://localhost:3000/api/auth/callback/twitter
export default api(async (_req, res, ctx) => {
  passport.authenticate("twitter", { failureRedirect: "/auth/login", failureMessage: true }),
    res.status(200).json({
      userId: ctx.session.userId,
    })
})

// export default twitterLogin(async (_req, res, ctx) => {
//   passport.authenticate('twitter', { failureRedirect: '/auth/login', failureMessage: true }),
//   res.status(200).json({
//     userId: ctx.session.userId,
//   })
// })

// gets user data
// export default api(async (_req, res, ctx) => {
//   const auth = ctx.session.$authorize();
//   console.log("auth",auth);
//   const publicData = ctx.session.$publicData;
//
//   res.status(200).json({
//     userId: ctx.session.userId,
//     publicData: { ...publicData },
//   })
// })
