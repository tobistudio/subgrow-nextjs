// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_gTyufzjdwOF2LOad8k32MxpU');

const coupon = await stripe.coupons.create({
  duration: 'once',
  id: 'free-period',
  percent_off: 100,
});
