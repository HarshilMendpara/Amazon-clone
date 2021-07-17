const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
require("dotenv").config();
const stripe = require('stripe')(process.env.SECRET_KEY)

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => response.status(200).send("Hello world"));

app.post('/payment/create', async (req, res) => {
    const total = req.query.total;
    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'inr',
        });

        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    } catch (err) {
        res.status(500).send({
            err: err,
        })
    }
})

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-9f820/us-central1/api