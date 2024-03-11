const Orders = require("../models/orders.model");

const OrdersDataAccess = {
  async create(ordersModel) {
    return await ordersModel.save();
  },
  async listAll() {
    return await Orders.find().select("user status");
  },
  async updateById(id, body) {
    return await Orders.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Orders.findOne(where);
  },
  async findById(id) {
    return await Orders.findById({ _id: id });
  },
  async find(where) {
    return await Orders.find(where).sort({ uploadedAt: -1 });
  },
  async findOnePopulate(where, populate) {
    return await Orders.findOne(where).populate(populate);
  }
};

module.exports = OrdersDataAccess;
