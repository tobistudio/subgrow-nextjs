import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "../../../db"
import { z } from "zod"

const CheckUser = z.object({
  username: z.string().min(4, { message: "Must be 4 or more characters long" }),
})

//.emoji({ message: "Contains non-emoji characters" });

// export default resolver.pipe(resolver.zod(CheckUser), async (username) => {
export default resolver.pipe(resolver.zod(CheckUser), async ({ username: string }) => {
  // export default resolver.pipe(resolver.zod(CheckUser), async ({ username: string }) => {


  // const blah: string = username;
  // <html>TS2322: Type '{ username: any; }' is not assignable to type 'UserWhereUniqueInput'.<br/>
  // Object literal may only specify known properties, and 'username' does not exist in type 'UserWhereUniqueInput'.
  const user = await db.user.findUnique({
    where: { username: string },
    // select: {
    //   username: true,
    // },
  })

  console.log("user lookup", user)

  if (!user) throw new NotFoundError()

  return user
})
