import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { CreateServiceSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateServiceSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const service = await db.services.create({ data: input })

    return service
  }
)
