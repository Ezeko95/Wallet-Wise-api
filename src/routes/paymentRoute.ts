import { Router } from 'express';
const payRout: Router = Router();
const stripe = require("stripe")("sk_test_51NORIxCelYUlowq6RkAyh5tDjeeI4BP2Tdgmb00cPa1uvdcTAimYUjamyK0q5mUioZq7BmPb1iKdegtNRkw56M2P00G0JcsjOe")

payRout.post("/intent", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (err) {
        res.status(400).json("ERROR");
    }
});
export default payRout