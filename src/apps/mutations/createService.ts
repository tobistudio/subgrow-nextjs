import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { CreateServiceSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateServiceSchema),
  resolver.authorize(),
  async (input: any) => {

    const service = await db.apps.create({ data: input })

    return service
  }
)
