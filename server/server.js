const express = require("express");
const app = express();
const { findGifts, addGift } = require("./gifts");

app.use(express.json());

app.use("*", (req, res, next) => {
  console.log("path is " + req.originalUrl);
  next();
});
// gets a list of all gifts from array
app.get("/api/gifts", (req, res) => {
  let gifts = findGifts();
  console.log("we got here");
  console.log(gifts);
  res.json(gifts);
});
//adds a gift to the gift array
app.post("/api/gifts", (req, res) => {
  const newGift = req.body;
  addGift(newGift);
  console.log("You added this new gift to the list: ", newGift);
  res.send("success in adding gift!");
});
//lets the user know that the path didn't work
app.use("*", (req, res) => {
  console.log("Oh no, this didn't go anywhere");
  res.send("Sorry that path doesn't exist");
});
app.listen(5000, () => {
  console.log("listening on 5000");
});
