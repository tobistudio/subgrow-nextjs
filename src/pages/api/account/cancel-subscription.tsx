
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY)

export default async function cancelSubscription(req, res, { createSubscriptionRequest }) {

  // Cancel the subscription
  try {
    const deletedSubscription = await stripe.subscriptions.del(
      req.body.subscriptionId
    );

    res.send({ subscription: deletedSubscription });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }

}
