
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY)
export default async function updateSubscription(req, res, { createSubscriptionRequest }) {

  try {
    const subscription = await stripe.subscriptions.retrieve(
      req.body.subscriptionId
    );
    const updatedSubscription = await stripe.subscriptions.update(
      req.body.subscriptionId, {
        items: [{
          id: subscription.items.data[0].id,
          price: process.env[req.body.newPriceLookupKey.toUpperCase()],
        }],
      }
    );

    res.send({subscription: updatedSubscription});
  } catch (error) {
    return res.status(400).send({error: {message: error.message}});
  }
}
