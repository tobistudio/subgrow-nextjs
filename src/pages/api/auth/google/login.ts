import { api } from "../../../../blitz-server"
import passport from "passport"

export default api(async (_req, res, ctx) => {
  const auth = ctx.session.$authorize()
  const publicData = ctx.session.$publicData

  try {
    const response = passport.authenticate("google", {
      failureRedirect: "/api/auth/google/failed",
      failureMessage: true,
      successRedirect: "/dashboard",
      failureFlash: true,
      scope: ["email"],
    })
    // res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Cache-Control", "max-age=180000")

    console.log("google response", response)
    //res.end(JSON.stringify(response))
    //res.redirect('/dashboard');
    res.status(200).json({
      success: true,
      response: response,
      message: "I think it's auth, redirect now?.",
    })
  } catch (error) {
    res.json(error)
    res.status(405).end()
  }

  // console.log("authTwitter",authTwitter);
  // res.status(401).json({
  //   success: true,
  //   results: authTwitter,
  //   message: "I think it's auth, redirect now?."
  // });
})
