const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tarotSchema = new Schema(
  {
    id: {
      type: Schema.Types.Number,
      required: true
    },
    name: {
      type: Schema.Types.String,
      required: true
    },
    description: {
      type: Schema.Types.String,
      required: true
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Tarot = mongoose.model("Tarot", tarotSchema, "tarot");

module.exports = Tarot;
