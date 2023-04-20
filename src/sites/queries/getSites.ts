import {NotFoundError, paginate} from "blitz"
import { resolver } from "@blitzjs/rpc"
// import db, { Prisma } from "../../../db"
import db, { Prisma } from "../../../db"
import {z} from "zod";

const getSites = z.object({
  // id: z.string().optional().refine(Boolean, "Required"),
  // userId: z.number().int(),
  userId: z.number(),
})


// export default async function main() {
//   const allUsers = await db.site.findMany()
//   console.log(allUsers)
//
//   return allUsers;
// }

export default resolver.pipe(resolver.zod(getSites), async ({ userId }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const site = await db.site.findMany({
    // fields
    where: { userId },
  })
  if (!site) throw new NotFoundError()
  return site
})


// import { paginate } from "blitz"
// import { resolver } from "@blitzjs/rpc"
// // import db, { Prisma } from "../../../db"
// import db, { Prisma } from "../../../db"
//
// import { PrismaClient } from "../../../db/generated/prisma-client-js";
// // import {SiteFindManyArgs} from "../../../db/generated/prisma-client-js";
// // import {SiteFindManyArgs} from "../../../db/generated/prisma-client-js";
// // import SiteFindManyArgs from "../../../db"
//
//
// interface GetSitesInput
//   extends Pick<
//     Prisma.SiteFindManyArgs, //
//     "where" | "orderBy" | "skip" | "take"
//     > {}
//
//
//
// // BlahFindManyArgs
// // interface GetSitesInput
// //   extends Pick<Prisma.SiteFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}
//
//
//
// export default resolver.pipe(
//   resolver.authorize(),
//   async ({ where, orderBy, skip = 0, take = 100 }: GetSitesInput) => {
//     // TODO: in multi-tenant app, you must add validation to ensure correct tenant
//     const {
//       items: sites,
//       hasMore,
//       nextPage,
//       count,
//     } = await paginate({
//       skip,
//       take,
//       count: () => db.site.count({ where }),
//       query: (paginateArgs) => db.site.findMany({ ...paginateArgs, where, orderBy }),
//     })
//
//     return {
//       sites,
//       nextPage,
//       hasMore,
//       count,
//     }
//   }
// )
