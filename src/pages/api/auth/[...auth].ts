// src/pages/api/auth/[...auth].ts
import { passportAuth } from "@blitzjs/auth"
import { api } from "../../../blitz-server"
import db from "../../../../db"
import { Strategy as TwitterStrategy } from "passport-twitter"
import { Strategy as FacebookStrategy } from "passport-facebook-next"
import { Strategy as TiktokStrategy } from "passport-tiktok-auth"
import { Strategy as InstagramStrategy } from "passport-instagram"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

// TODO: instagram TypeError: OAuth2Strategy requires a clientID option
// TODO: tik tok https://developers.tiktok.com/doc/login-kit-web/
// http://localhost:3000/api/auth/facebook
// ./node_modules/@mui/material/node_modules/@mui/base/ClickAwayListener/index.js
// Module build failed: Error: ENOENT: no such file or directory, open '/Users/amirmeshkin/_code/_business/links/node_modules/@mui/material/node_modules/@mui/base/ClickAwayListener/index.js'

console.log("process.env.GOOGLE_CLIENT_ID", process.env.GOOGLE_CLIENT_ID)

export default api(
  passportAuth({
    successRedirectUrl: "/",
    errorRedirectUrl: "/",
    strategies: [
      {
        strategy: new GoogleStrategy(
          {
            // clientID: process.env.GOOGLE_CLIENT_ID,
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scope: ["email"],
            clientID: "207654379049-lra412s7jvebh07ff063klk3vkoj22t2.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/google/callback",
          },
          function (accessToken, refreshToken, profile, cb) {
            console.log("accessToken", accessToken)
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //   return cb(err, user);
            // });
          }
        ),
      },
      // {
      //   strategy: new TwitterStrategy(
      //     {
      //       // options for the twitter start
      //       // accessTokenURL: process.env.TWITTER_CONSUMER_KEY,
      //       // clientID: process.env.TWITTER_CONSUMER_KEY,
      //       // clientSecret: process.env.TWITTER_CONSUMER_SECRET,
      //       consumerKey: process.env.TWITTER_CONSUMER_KEY,
      //       consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      //       callbackURL:
      //         process.env.NODE_ENV === "production"
      //           ? "https://subgrow.com/dashboard"
      //           : "http://localhost:3000/dashboard",
      //       includeEmail: true,
      //     },
      //     async (token, tokenSecret, profile, done) => {
      //       // find current user in UserModel
      //       // const currentUser = await User.findOne({
      //       //   twitterId: profile._json.id_str
      //       // });
      //
      //       const currentUser = async () => {
      //         console.log("Sadfasf")
      //       }
      //
      //       // create new user if the database doesn't have this user
      //       if (!currentUser) {
      //         // const newUser = await new User({
      //         //   name: profile._json.name,
      //         //   screenName: profile._json.screen_name,
      //         //   twitterId: profile._json.id_str,
      //         //   profileImageUrl: profile._json.profile_image_url
      //         // }).save();
      //
      //         const newUser = async () => {
      //           console.log("newUser", profile)
      //         }
      //
      //         if (newUser) {
      //           done(null, newUser)
      //         }
      //       }
      //       done(null, currentUser)
      //     }
      //   ),
      // },
      {
        strategy: new TiktokStrategy(
          {
            clientID: process.env.TIKTOK_CLIENT_KEY,
            // clientID: "7223001495028107269",
            // client_key: "7223001495028107269",
            clientSecret: process.env.TIKTOK_CLIENT_SECRET,
            scope: ["user.info.basic", "video.list"],
            callbackURL: "http://localhost:3000/dashboard",
            // redirectURL: "https://localhost:3000/dashboard",
            redirectURL: "http://localhost:3000/dashboard",
          },
          function (accessToken, refreshToken, profile, done) {
            console.log("accessToken", accessToken)
            console.log("profile", profile)

            // User.findOrCreate({ tiktokId: profile.id }, function (err, user) {
            //   return done(err, user);
            // });
          }
        ),
      },
      // {
      //   strategy: new TwitterStrategy(
      //     {
      //       consumerKey: process.env.TWITTER_CONSUMER_KEY,
      //       consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      //       callbackURL:
      //         process.env.NODE_ENV === "production"
      //           ? "https://subgrow.com/dashboard"
      //           : "http://localhost:3000/dashboard",
      //       includeEmail: true,
      //     },
      //     async function (_token, _tokenSecret, profile, done) {
      //       const email = profile.emails && profile.emails[0]?.value
      //
      //       if (!email) {
      //         // This can happen if you haven't enabled email access in your twitter app permissions
      //         return done(
      //           new Error("Twitter OAuth response doesn't have email.")
      //         )
      //       }
      //
      //       const user = await db.user.upsert({
      //         where: { email },
      //         create: {
      //           email,
      //           name: profile.displayName,
      //         },
      //         update: { email },
      //       })
      //
      //       const publicData = {
      //         userId: user.id,
      //         roles: [user.role],
      //         source: "twitter",
      //       }
      //       done(undefined, { publicData })
      //     }
      //   ),
      // },
      {
        strategy: new FacebookStrategy(
          {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            // callbackURL: "http://localhost:3000/api/auth/facebook/callback",
            callbackURL: "http://localhost:3000/api/auth/facebook/callback",
            scope: ["user_media,", "user_profile", "instagram_basic", "pages_show_list"],
          },
          function (accessToken, refreshToken, profile, cb) {
            console.log("fb accessToken", accessToken)
            // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            //   return cb(err, user)
            // })
          }
        ),
      },
      {
        strategy: new InstagramStrategy(
          {
            // clientID: process.env.INSTAGRAM_CLIENT_ID,
            // clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
            clientID: process.env.INSTAGRAM_APP_ID,
            clientSecret: process.env.INSTAGRAM_APP_SECRET,
            callbackURL: "http://127.0.0.1:3000/dashboard",
            scope: ["user_media,", "user_profile", "instagram_basic", "pages_show_list"],
            // instagram_basic
            // pages_show_list
            // user_profile,user_media
          },
          function (accessToken, refreshToken, profile, done) {
            console.log("instagram profile", profile)

            // User.findOrCreate({ instagramId: profile.id }, function (err, user) {
            //   return done(err, user)
            // })
          }
        ),
      },
    ],
  })
)

/*
https://developers.facebook.com/apps/241448415049637/fb-login/quickstart/


passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ instagramId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
*/
