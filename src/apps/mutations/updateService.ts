import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { UpdateServiceSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateServiceSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {

    const service = await db.apps.update({ where: { id }, data })

    return service
  }
)
