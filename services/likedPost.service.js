const LikedPost = require("../models/likedPost.model");
const likedPostDal = require("../dal/index");
const userDal = require("../dal/user.dal");

exports.likePost = async (req) => {
  try {
    let { title, text, user } = req.body;
    const findedUser = await userDal.findById(user)
    let postDate = new Date();
    const post = new LikedPost({
      title,
      text,
      postDate
    });
    const json = await likedPostDal.likedPost.create(post);
    findedUser.likedPost.push(json._id);
    await userDal.create(findedUser)
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getLikedPostById = async (id) => {
  try {
    const json = await userDal.findOnePopulate(
      { _id: id },
      {
        path: "likedPost",
        select: "title text postDate _id"
      }
    );
    return json.likedPost;
  } catch (error) {
    console.log("dfsd");
    throw new Error(error);
  }
};
