const stripe = require('stripe')('sk_test_gTyufzjdwOF2LOad8k32MxpU', {
    stripeAccount: 'acct_2SniyzdM33ylfrfrR6F6'
});

export default async function createCoupon(req, res) {

    try {
        // const coupon = await stripe.coupons.create({
        //     percent_off: 25, // 25% off
        //     duration: 'repeating', // Specifies how long the discount should be applied (once, forever, repeating)
        //     duration_in_months: 3, // If the duration is "repeating", specify the number of months the discount should apply
        //     id: 'COUPON_CODE', // Unique identifier for the coupon
        // });

        const coupon = await stripe.coupons.retrieve(req.body.couponCode);

        if (coupon.discount_type === 'fixed_amount') {
            console.log(`Fixed discount amount: ${coupon.amount_off} (${coupon.currency.toUpperCase()})`);
            res.json({ amout_off: coupon.amount_off, currency: coupon.currency.toUpperCase() })
        } else if (coupon.discount_type === 'percentage') {
            console.log(`Percentage discount: ${coupon.percent_off}%`);
            res.json({ percent_off: coupon.percent_off })
        } else {
            res.json({ current: 'test code' })
        }
    } catch (error) {
        res.status(400).json({ err: error.message });
    }
}
