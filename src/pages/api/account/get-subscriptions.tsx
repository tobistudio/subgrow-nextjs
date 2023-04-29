//
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/subscription-use-cases/fixed-price",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/subscription-use-cases/fixed-price"
  }
});

export default async function getSubscriptions(req, res, { createSubscriptionRequest }) {

  // Simulate authenticated user. In practice this will be the
  // Stripe Customer ID related to the authenticated user.
  const customerId = req.cookies['customer'];


  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    status: 'all',
    expand: ['data.default_payment_method'],
  });

  res.json({subscriptions});



}
