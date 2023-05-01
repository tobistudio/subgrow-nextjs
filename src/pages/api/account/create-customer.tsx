import db from "../../../../db";

const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY)

export default async function createCustomer(req, res) {

  const {
    email,
    userId
    // paymentMethodId
  } = req.body

  // Create a new customer object
  const customer_data = await stripe.customers.create({
    email: email,
    // payment_method: paymentMethodId,
    // invoice_settings: {
    //   default_payment_method: paymentMethodId,
    // },
  });
  // Save the customer.id in your database alongside your user.
  // We're simulating authentication with a cookie.

  console.log("req.body", req.body);

  // FIXME: get userId
  // const userId = ctx.session.userId as string
  // /input["userId"] = ctx.session.userId

  const input: any = {
    userId: userId,
    email: email,
    customer_id: customer_data.id
  }
  console.log("create site inputs", input)
  // TODO: update the session, and update user level

  // TODO: do I do this here, or in a mutation or other place

  // const data: Array<any> = [];
  const customer = await db.customer.create({ data: input })
  // const site = await db.link.create({ ...input })
  // const site = await db.link.create({ ...input })

  // console.log("site", customer)


  // res.cookie('customer', customer.id, { maxAge: 900000, httpOnly: true });

  //res.send({ customer: customer });


  return res.status(400).send({ customer: customer });


}
