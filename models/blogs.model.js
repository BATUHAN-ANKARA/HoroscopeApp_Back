const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogsSchema = new Schema(
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
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Blogs = mongoose.model("Blogs", blogsSchema, "blogs");

module.exports = Blogs;
