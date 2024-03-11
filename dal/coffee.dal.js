const Coffee = require("../models/coffee.model");

const CoffeeDataAccess = {
  async create(coffeeModel) {
    return await coffeeModel.save();
  },
  async listAll() {
    return await Coffee.find().select("uri user uploadDate");
  },
  async updateById(id, body) {
    return await Coffee.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Coffee.findOne(where);
  },
  async findById(id) {
    return await Coffee.findById({ _id: id });
  },
  async find(where) {
    return await Coffee.find(where).sort({ uploadedAt: -1 });
  },
  async findOnePopulate(where, populate) {
    return await Coffee.findOne(where).populate(populate);
  }
};

module.exports = CoffeeDataAccess;
