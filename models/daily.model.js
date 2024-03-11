const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dailySchema = new Schema(
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

const Daily = mongoose.model("Daily", dailySchema, "daily");

module.exports = Daily;
