


const event = request.body;

// Handle the event
switch (event.type) {
  case 'payment_intent.succeeded':
    const paymentIntent = event.data.object;
    // Then define and call a method to handle the successful payment intent.
    // handlePaymentIntentSucceeded(paymentIntent);
    break;
  case 'payment_method.attached':
    const paymentMethod = event.data.object;
    // Then define and call a method to handle the successful attachment of a PaymentMethod.
    // handlePaymentMethodAttached(paymentMethod);
    break;
  // ... handle other event types
  default:
    console.log(`Unhandled event type ${event.type}`);
}

// Return a response to acknowledge receipt of the event
response.json({received: true});
