require('dotenv').config();
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.Secret_key_stripe)

router.post("/stripeendpoint", async (req, res) => {
    try {
        const { products } = req.body;

        // const lineItems = products.map((product) => {
        //     price_data:{
        //         currency: "usd",
        //         product_data:{
        //             name:product.name;
        //         },
        //         unit_amount: product.price*100,
        //     },
        // })

        // const session = await stripe.checkout.sessions.create({
        //     payment_method_types:["card"],
        //     line_items:lineItems,
        //     mode: "payment",
        // });


        const lineItems = products.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.name,
                },
                unit_amount: product.price * 100, // Price should be in cents
            },
            quantity: product.quantity, // Quantity of the product
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000", // Define your success URL
            cancel_url: "http://localhost:3000/cancel", // Define your cancel URL
        });

        res.json({ id: session.id })

    } catch (error) {
        res.status(400).json({ error : "Error occured while adding payment method!" })
    }
});

module.exports = router;