const zodiacDal = require("../dal/index");

exports.getDaily = async (horoscopeName) => {
  try {
    const findedHoroscope = await zodiacDal.dailyDal.findOne({
      title: horoscopeName
    });
    return findedHoroscope;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getWeekly = async (horoscopeName) => {
  try {
    const findedHoroscope = await zodiacDal.weeklyDal.findOne({
      title: horoscopeName
    });
    return findedHoroscope;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getMonthly = async (horoscopeName) => {
  try {
    const findedHoroscope = await zodiacDal.monthlyDal.findOne({
      title: horoscopeName
    });
    return findedHoroscope;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getRelationship = async (req) => {
  try {
    const { horoscope1, horoscope2 } = req.query;
    const json = await zodiacDal.relationshipDal.findOne({
      horoscopeName: horoscope1,
      otherName: horoscope2
    });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};