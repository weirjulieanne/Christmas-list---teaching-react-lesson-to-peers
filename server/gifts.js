const gifts = [
  {
    recipient: "Sister",
    gift: "Frying Pan",
    store: "Canadian Tire",
    price: 49.99,
    extraInfo: "Wrap in a gift bag with tissue paper",
    completed: false,
  },
  {
    recipient: "Mother",
    gift: "Plant stand",
    store: "Home Sense",
    price: 55.0,
    extraInfo: "Present gift with christmas bow and poinsettia inside",
    completed: false,
  },
  {
    recipient: "Brother In Law",
    gift: "Whiskey",
    store: "Liquor Store",
    price: 79.99,
    extraInfo: "Use a bottle bag with tissue paper",
    completed: false,
  },
  {
    recipient: "Joshua",
    gift: "Remote control car",
    store: "Amazon",
    price: 39.99,
    extraInfo: "Wrap in box with christmas paper",
    completed: false,
  },
  {
    recipient: "Julia",
    gift: "Peppa Pig microphone and book",
    store: "Toys 'R' Us",
    price: 39.99,
    extraInfo: "Wrap in a christmas bag with tissue paper",
    completed: false,
  },
];

function findGifts() {
  return gifts;
}
function addGift(newGift) {
  gifts.push(newGift);
  return gifts;
}

module.exports = { findGifts, addGift };
