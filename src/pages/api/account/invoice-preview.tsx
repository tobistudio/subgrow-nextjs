//
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/subscription-use-cases/fixed-price",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/subscription-use-cases/fixed-price"
  }
});

export default async function invoicePreview(req, res, { createSubscriptionRequest }) {

  const customerId = req.cookies['customer'];
  const priceId = process.env[req.query.newPriceLookupKey.toUpperCase()];

  const subscription = await stripe.subscriptions.retrieve(
    req.query.subscriptionId
  );

  const invoice = await stripe.invoices.retrieveUpcoming({
    customer: customerId,
    subscription: req.query.subscriptionId,
    subscription_items: [ {
      id: subscription.items.data[0].id,
      price: priceId,
    }],
  });

  res.send({ invoice });

}
