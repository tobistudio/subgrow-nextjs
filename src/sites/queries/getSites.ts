import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "../../../db"

interface GetSitesInput
  extends Pick<Prisma.SiteFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

// export type SiteFindManyArgs = {
//   /**
//    * Select specific fields to fetch from the User
//    */
//   select?: UserSelect | null
//   /**
//    * Choose, which related nodes to fetch as well.
//    */
//   include?: UserInclude | null
//   /**
//    * Filter, which Users to fetch.
//    */
//   where?: UserWhereInput
//   /**
//    * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
//    *
//    * Determine the order of Users to fetch.
//    */
//   orderBy?: Enumerable<UserOrderByWithRelationInput>
//   /**
//    * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
//    *
//    * Sets the position for listing Users.
//    */
//   cursor?: UserWhereUniqueInput
//   /**
//    * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
//    *
//    * Take `±n` Users from the position of the cursor.
//    */
//   take?: number
//   /**
//    * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
//    *
//    * Skip the first `n` Users.
//    */
//   skip?: number
//   distinct?: Enumerable<UserScalarFieldEnum>
// }

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetSitesInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: sites,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.site.count({ where }),
      query: (paginateArgs) => db.site.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      sites,
      nextPage,
      hasMore,
      count,
    }
  }
)
