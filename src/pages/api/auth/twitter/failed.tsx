import { api } from "../../../../blitz-server"
import passport from "passport"

// May not need this
export default api(async (_req, res, ctx) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  })
})
