import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { DeleteServiceSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteServiceSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const service = await db.services.deleteMany({ where: { id } })

    return service
  }
)
