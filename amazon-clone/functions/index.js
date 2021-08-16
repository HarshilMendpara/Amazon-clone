const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    response.status(500).send({
      err: err,
    });
  }
});

app.listen(port);
