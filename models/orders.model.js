const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    status: {
      type: Schema.Types.Number,
      default: 0
    },
    product: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Orders = mongoose.model("Orders", ordersSchema, "orders");

module.exports = Orders;
