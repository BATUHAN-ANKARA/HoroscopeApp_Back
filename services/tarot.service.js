const tarotDal = require("../dal/index");

exports.getTarotFortune = async (req) => {
  try {
    const { id } = req.query;
    const json = await tarotDal.tarotDal.findOne({
      id: id
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};
