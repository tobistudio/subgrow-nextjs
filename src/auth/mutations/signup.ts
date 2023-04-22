// import { SecurePassword } from "@blitzjs/auth"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { Role } from "../../../types"
import { Signup } from "../validations"
// import {modern} from "../../../data/userthemes/modern"

export default resolver.pipe(resolver.zod(Signup), async ({ username, email, password }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim())

  let result = ""
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < 10) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }

  console.log("usernasd fsadf asdf asdfsa fsme", username)
  console.log("usernasd fsadf asdf asdfsa email", email)

  // TODO: check for username
  // const findUser = await db.user.findUnique({
  //   where: { username: username },
  //   select: {
  //     username: true,
  //   },
  // })
  //
  // console.log("findUser",findUser);

  const user = await db.user.create({
    data: { username: username, email: email.toLowerCase().trim(), hashedPassword, role: "USER" },
    // select: { id: true, name: true, email: true, role: true },
    select: { id: true, name: true, email: true, role: true, username: true },
  })

  // also create a profile
  const profile = await db.profile.create({
    data: {
      username: username,
      userId: user.id,
      title: "Profile Title",
      theme: {}, // TODO: default from
      widgets: {}, // nothing on default
      current: "yes",
    },
  })

  console.log("profile profile", profile)

  // ameshkin10
  // amir.meshkin10@gmail.com

  // welcome123

  // await ctx.session.$create({ userId: user.id, username: user.username, role: user.role as Role })
  // await ctx.session.$create({ userId: user.id as string, username: user.username, role: user.role as Role })
  await ctx.session.$create({
    userId: user.id,
    username: username,
    role: user.role as Role,
  })
  // FIXME: string issue BROKEN,, ID STRING, DOES NOT MATTER
  // await ctx.session.$create({ userId: user.id, role: user.role as Role })
  return user
})

// export default resolver.pipe(resolver.zod(Signup), async ({ email, password }, ctx) => {
//   const hashedPassword = await SecurePassword.hash(password.trim())
//   const user = await db.user.create({
//     data: { email: email.toLowerCase().trim(), hashedPassword, role: "USER" },
//     select: { id: true, name: true, email: true, role: true },
//   })
//
//   await ctx.session.$create({ userId: user.id, role: user.role as Role })
//   return user
// })
