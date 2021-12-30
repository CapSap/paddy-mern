const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },

  orderedItems: {
    type: Array,
  },
  fourHour: {
    type: Boolean,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
