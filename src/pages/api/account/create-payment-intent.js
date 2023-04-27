// This is your test secret API key.
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  console.log("items", items.id)

  // should only be one item
  // switch(items[0].id) {
  //   case 'silver':
  //     return 5
  //     break;
  //   case 'gold':
  //     return 15
  //     break;
  //   case 'platinum':
  //     return 25
  //     break;
  //   default:
  //   // code block
  // }

  return 1400
}

export default async function handler(req, res) {
  const { items } = req.body

  console.log("calculateOrderAmount(items)", calculateOrderAmount(items))

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}
