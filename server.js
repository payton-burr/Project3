const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const path = require("path");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 
// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Mongoose connection

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

const userRouter = require('./routes/users');

app.use('/users', userRouter);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
