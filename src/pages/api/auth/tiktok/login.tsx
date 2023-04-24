import { api } from "../../../../blitz-server"
import passport from "passport"

// const csrfState = Math.random().toString(36).substring(2);

// https://www.npmjs.com/package/passport-tiktok-auth
// const cookieParser = require('cookie-parser');
const TIKTOK_APP_KEY = process.env.TIKTOK_APP_KEY

export default api(async (_req, res, ctx) => {
  // const csrfState = Math.random().toString(36).substring(2);
  // //res.cookie('csrfState', csrfState, { maxAge: 60000 });
  //
  // let url = 'https://www.tiktok.com/auth/authorize/';
  //
  // url += '?client_key={TIKTOK_APP_KEY}';
  // url += '&scope=user.info.basic,video.list';
  // url += '&response_type=code';
  // url += '&redirect_uri={SERVER_ENDPOINT_REDIRECT}';
  // url += '&state=' + csrfState;
  //
  // res.redirect(url);

  const response = passport.authenticate("tiktok", {
    failureRedirect: "/auth/tiktok/failed",
    failureMessage: true,
    successRedirect: "/dashboard",
    failureFlash: true,
  })

  res.setHeader("Content-Type", "application/json")
  res.setHeader("Cache-Control", "max-age=180000")
  console.log("response", response)
  //res.redirect('/dashboard');
})
