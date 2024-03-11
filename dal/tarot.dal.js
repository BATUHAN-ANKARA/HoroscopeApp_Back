const Tarot = require("../models/tarot.model");

const TarotDataAccess = {
  async create(tarotModel) {
    return await tarotModel.save();
  },
  async updateById(id, body) {
    return await Tarot.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Tarot.findOne(where);
  },
  async findById(id) {
    return await Tarot.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Tarot.findOne(where).populate(populate);
  }
};

module.exports = TarotDataAccess;
