const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    surname: {
      type: Schema.Types.String,
      required: false
    },
    birthDate: {
      type: Schema.Types.Date,
      required: true
    },
    gender: {
      type: Schema.Types.String,
      required: false
    },
    email: {
      type: Schema.Types.String,
      required: false
    },
    password: {
      type: Schema.Types.String,
      required: false,
      min: 4
    },
    avatar: {
      type: Schema.Types.String,
      required: false
    },
    country: {
      type: Schema.Types.String,
      required: false
    },
    city: {
      type: Schema.Types.String,
      required: false
    },
    zodiac: {
      type: Schema.Types.String,
      required: false
    },
    age: {
      type: Schema.Types.Number,
      required: false
    },
    likedPost: [
      {
        type: Schema.Types.ObjectId,
        ref: "LikedPost"
      }
    ],
    coins: {
      type: Number,
      default: 100
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
