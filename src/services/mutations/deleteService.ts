import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { DeleteServiceSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteServiceSchema),
  resolver.authorize(),
  async ({ id }) => {

    const service = await db.apps.deleteMany({ where: { id } })

    return service
  }
)
