const LikedPost = require("../models/likedPost.model");

const LikedPostDataAccess = {
  async create(likedPostModel) {
    return await likedPostModel.save();
  },
  async listAll() {
    return await LikedPost.find().select("title text postDate");
  },
  async findOnePopulate(where, populate) {
    return await LikedPost.findOne(where).populate(populate);
  }
};

module.exports = LikedPostDataAccess;
