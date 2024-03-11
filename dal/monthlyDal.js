const Monthly = require("../models/monthly.model");

const MonthlyDataAccess = {
  async create(monthlyModel) {
    return await monthlyModel.save();
  },
  async updateById(id, body) {
    return await Monthly.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Monthly.findOne(where);
  },
  async findById(id) {
    return await Monthly.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Monthly.findOne(where).populate(populate);
  }
};

module.exports = MonthlyDataAccess;
