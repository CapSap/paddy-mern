const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  orderedItems: {
    type: Array,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
