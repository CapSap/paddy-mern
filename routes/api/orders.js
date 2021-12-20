const express = require("express");
const router = express.Router();

//order model import
const Order = require("../../models/Order");

//GET api/orders
router.get("/", (req, res) => {
  Order.find().then((orders) => res.json(orders));
});

// post an order
router.post("/", (req, res) => {
  const newOrder = new Order({
    orderNumber: req.body.orderNumber,
    orderedItems: req.body.orderedItems,
  });

  newOrder.save().then((order) => res.json(order));
});

// delete
// route api/items/:id
router.delete("/:id", (req, res) => {
  Order.findById(req.params.id)
    .then((order) => order.remove().then(() => res.json({ sucess: true })))
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
