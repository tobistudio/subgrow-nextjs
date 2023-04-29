import Stripe from 'stripe'
import { plansConfig } from '../../../configs/plans.config';

// const stripe = new Stripe('sk_test_gTyufzjdwOF2LOad8k32MxpU');
const stripe = require('stripe')('sk_test_gTyufzjdwOF2LOad8k32MxpU');

export default async function createSubscription(req, res) {

  const createSubscriptionRequest = req.body;

  // create a stripe customer
  const customer = await stripe.customers.create({
    name: createSubscriptionRequest.name,
    email: createSubscriptionRequest.email,
    payment_method: createSubscriptionRequest.paymentMethod,
    invoice_settings: {
      default_payment_method: createSubscriptionRequest.paymentMethod,
    },
  });


  // get the price id from the front-end
  const price = await stripe.prices.create({
    unit_amount: plansConfig.level1.price * 100, // amount in cents
    currency: 'usd',
    recurring: {
      interval: 'month', // specify the billing interval (day, week, month or year)
    },
    product_data: {
      name: 'Basic Plan',
    },
  });

  // Create a new subscription
  const subscription = await stripe.subscriptions.create({
    customer: customer.id, // ID of an existing customer
    items: [{ price: price.id }], // Array of one or more items containing the price ID
    payment_behavior: 'default_incomplete', // wait for manual payment confirmation
    expand: ['latest_invoice.payment_intent'], // Include information about the latest invoice and payment intent
  });


  // return the client secret and subscription id
  res.send({
    clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    subscriptionId: subscription.id,
  });
}