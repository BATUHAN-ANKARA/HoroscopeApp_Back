const Weekly = require("../models/weekly.model");

const WeeklyDataAccess = {
  async create(weeklyModel) {
    return await weeklyModel.save();
  },
  async updateById(id, body) {
    return await Weekly.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Weekly.findOne(where);
  },
  async findById(id) {
    return await Weekly.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Weekly.findOne(where).populate(populate);
  }
};

module.exports = WeeklyDataAccess;
