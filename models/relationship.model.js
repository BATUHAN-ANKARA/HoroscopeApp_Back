const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const relationshipSchema = new Schema(
  {
    horoscopeName: {
      type: Schema.Types.String,
      required: true
    },
    otherName: {
      type: Schema.Types.String,
      required: false
    },
    relationship: {
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

const Relationship = mongoose.model(
  "Relationship",
  relationshipSchema,
  "relationship"
);

module.exports = Relationship;
