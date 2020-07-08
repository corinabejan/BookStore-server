const { Router } = require("express");
const Stripe = require("stripe");
const { stripeKey } = require("../config/secrets");
const router = new Router();
const stripe = new Stripe(`${stripeKey}`);

router.post("/", async (req, res, next) => {
  const { id, amount } = req.body;
  if (!id || !amount) {
    res.status(403).send("Missing Parameters!");
  }
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      description: "Payment for books",
      payment_method: id,
      payment_method_types: ["card"],
      confirm: true,
    });
    res.status(200).json({ message: "Payment successful", payment });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
