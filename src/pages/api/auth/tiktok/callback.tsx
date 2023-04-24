import { api } from "../../../../blitz-server"
import passport from "passport"

/**
 * Callback for tik tok
 * https://developers.tiktok.com/app/7223001495028107269#configuration
 * // TODO: make sure post will work here since tik tok sends post
 */
export default api(async (_req, res, ctx) => {
  const auth = ctx.session.$authorize()
  const publicData = ctx.session.$publicData

  try {
    const response = passport.authenticate("tiktok", {
      failureRedirect: "/auth/tiktok/failed",
      failureMessage: true,
      successRedirect: "/dashboard",
      failureFlash: true,
    })
    // res.statusCode = 200;
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Cache-Control", "max-age=180000")

    console.log("response", response)

    res.redirect("/dashboard")

    // res.end(JSON.stringify(response));

    // res.status(200).json({
    //   success: true,
    //   response: response,
    //   message: "I think it's auth, redirect now?."
    // });
  } catch (error) {
    res.json(error)
    res.status(405).end()
  }
})
