import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dbCards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const dbname = "tinderDB";
const uri = `mongodb+srv://admin:p02Wed6WkhHbKUxM@cluster0.jdsyykf.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(cors({ origin: true }));

// DB Config
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));
app.get("/tinder/cards", (req, res) => {
  dbCards
    .find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});
app.post("/tinder/cards", (req, res) => {
  const cards = req.body;
  dbCards
    .create(cards)
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(500).send(err));
});

// Listener
app.listen(port, () => console.log(`Listening on port `));
