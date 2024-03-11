const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const weeklySchema = new Schema(
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

const Weekly = mongoose.model("Weekly", weeklySchema, "weekly");

module.exports = Weekly;
