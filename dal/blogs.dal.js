const Blogs = require("../models/blogs.model");

const BlogsDataAccess = {
  async create(blogsModel) {
    return await blogsModel.save();
  },
  async listAll() {
    return await Blogs.find().select("title text postDate");
  }
};

module.exports = BlogsDataAccess;
