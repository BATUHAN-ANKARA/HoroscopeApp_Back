const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monthlySchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true
    },
    text: {
      type: Schema.Types.String,
      required: false
    },
    author: {
      type: Schema.Types.String,
      required: false
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Monthly = mongoose.model("Monthly", monthlySchema, "monthly");

module.exports = Monthly;
