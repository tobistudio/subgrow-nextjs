export default async function handler(req, res) {
  const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
    appInfo: {
      // For sample support and debugging, not required for production:
      name: "stripe-samples/checkout-single-subscription",
      version: "0.0.1",
      url: "https://github.com/stripe-samples/checkout-single-subscription",
    },
  })

  const { sessionId } = req.query
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  res.send(session)
}
