// const stripe = require('stripe')('sk_test_gTyufzjdwOF2LOad8k32MxpU');

// Set the connected Stripe Account to collect payments on behalf of that account
const stripe = require('stripe')('sk_test_gTyufzjdwOF2LOad8k32MxpU', {
  stripeAccount: 'acct_2SniyzdM33ylfrfrR6F6'
});

import { plansConfig } from 'configs/plans.config';

const handler = async (req, res) => {
  const { plan, payment_intent_id, currency, automatic_payment_methods } = req.body;
  let amount
  //
  // // TODO: phase ii, add euro
  //
  // // TODO: for security, plan has to be passed in, and amount comes from config
  switch (plan) {
    case 'LEVEL1':
      amount = plansConfig.level1.price.usd
      break;
    case 'LEVEL2':
      amount = plansConfig.level2.price.usd
      break;
    case 'LEVEL3':
      amount = plansConfig.level2.price.usd
      break;
    default:
      amount = plansConfig.level1.price.usd
    // should error out here for security
    //res.status(500).json({ statusCode: 500, message: "Please select a plan" });
  }
  console.log(currency);


  if (payment_intent_id) {
    try {
      // If a payment_intent_id is passed, retrieve the paymentIntent
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent_id
      );
      // If a paymentIntent is retrieved update its amount
      if (current_intent) {
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent_id,
          {
            amount: amount * 100,
          }
        );
        res.status(200).json(updated_intent);
        return;
      }
    } catch (e) {
      //Catch any error and return a status 500
      if (e.code !== 'resource_missing') {
        const errorMessage =
          e instanceof Error ? e.message : 'Internal server error';
        res.status(500).json({ statusCode: 500, message: errorMessage });
        return;
      }
    }
  }
  try {
    // Create PaymentIntent
    // TODO: usd breaks {"statusCode":500,"message":"No valid payment method types for this Payment Intent. Please ensure that you have activated payment methods compatible with your chosen currency in your dashboard (https://dashboard.stripe.com/settings/payment_methods) or specify payment_method_types"}x - done
    const params = {
      amount: amount * 100,
      currency: currency, // change to usd breaks
      description: 'Payment description',
      automatic_payment_methods: {
        enabled: true,
      },
    };
    const payment_intent = await stripe.paymentIntents.create(params);
    //Return the payment_intent object
    res.status(200).json(payment_intent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Internal server error';
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
};
export default handler;
