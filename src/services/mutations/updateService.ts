import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { UpdateServiceSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateServiceSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const service = await db.services.update({ where: { id }, data })

    return service
  }
)
