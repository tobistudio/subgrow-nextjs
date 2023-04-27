export default async function createSubscription(req, res, { createSubscriptionRequest }) {
  // create a stripe customer
  const customer = await this.stripe.customers.create({
    name: createSubscriptionRequest.name,
    email: createSubscriptionRequest.email,
    payment_method: createSubscriptionRequest.paymentMethod,
    invoice_settings: {
      default_payment_method: createSubscriptionRequest.paymentMethod,
    },
  })

  // get the price id from the front-end
  const priceId = createSubscriptionRequest.priceId

  // create a stripe subscription
  const subscription = await this.stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: priceId }],
    payment_settings: {
      payment_method_options: {
        card: {
          request_three_d_secure: "any",
        },
      },
      payment_method_types: ["card"],
      save_default_payment_method: "on_subscription",
    },
    expand: ["latest_invoice.payment_intent"],
  })

  // return the client secret and subscription id
  return {
    clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    subscriptionId: subscription.id,
  }
}
