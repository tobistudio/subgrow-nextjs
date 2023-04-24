import { api } from "blitz-server"
// import db from "../../db"
// import { Ctx } from "blitz"

export default api(async (_req, res, ctx) => {
  const auth = ctx.session.$authorize()
  console.log("auth", auth)
  const publicData = ctx.session.$publicData

  res.status(200).json({
    userId: ctx.session.userId,
    publicData: { ...publicData },
  })
})
