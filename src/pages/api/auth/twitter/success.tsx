// when login is successful, retrieve user info
import passport from "passport"
import { api } from "../../../../blitz-server"

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.json({
//       success: true,
//       message: "user has successfully authenticated",
//       user: req.user,
//       cookies: req.cookies
//     });
//   }
// });

// redirect should be to a page!
// https://medium.com/free-code-camp/how-to-set-up-twitter-oauth-using-passport-js-and-reactjs-9ffa6f49ef0
// when login is successful, retrieve user info
export default api(async (_req, res, ctx) => {
  const auth = ctx.session.$authorize()
  const publicData = ctx.session.$publicData
  passport.authenticate("twitter", {
    failureRedirect: "/auth/twitter/failed",
    failureMessage: true,
    successRedirect: "/dashboard",
    failureFlash: true,
  })

  // res.status(200).json({
  //   userId: ctx.session.userId,
  //   publicData: { ...publicData },
  // })
  //
  // passport.authenticate('login', {
  //   successRedirect : '/home',
  //   failureRedirect : '/login',
  //   failureFlash : true
  // })
})
// failure {"message":"You must be logged in to access this","name":"AuthenticationError","statusCode":401}
