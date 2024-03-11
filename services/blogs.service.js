const blogsDal = require("../dal/index");

exports.listAll = async () => {
  try {
    const json = await blogsDal.blogs.listAll();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
