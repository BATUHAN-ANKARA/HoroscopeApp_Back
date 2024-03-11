const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likedPostSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true
    },
    text: {
      type: Schema.Types.String,
      required: false
    },
    postDate: {
      type: Schema.Types.Date,
      required: true
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const LikedPost = mongoose.model("LikedPost", likedPostSchema, "likedPost");

module.exports = LikedPost;
