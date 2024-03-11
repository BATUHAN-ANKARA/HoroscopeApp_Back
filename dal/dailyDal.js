const Daily = require("../models/daily.model");

const DailyDataAccess = {
  async create(dailyModel) {
    return await dailyModel.save();
  },
  async updateById(id, body) {
    return await Daily.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Daily.findOne(where);
  },
  async findById(id) {
    return await Daily.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Daily.findOne(where).populate(populate);
  }
};

module.exports = DailyDataAccess;
