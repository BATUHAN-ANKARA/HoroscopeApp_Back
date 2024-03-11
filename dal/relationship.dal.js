const Relationship = require("../models/relationship.model");

const RelationshipDataAccess = {
  async create(relayionshipModel) {
    return await relayionshipModel.save();
  },
  async listAll() {
    return await Relationship.find().select("horoscopeName otherName relationship");
  },
  async updateById(id, body) {
    return await Relationship.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Relationship.findOne(where);
  },
  async findById(id) {
    return await Relationship.findById({ _id: id });
  },
  async find(where) {
    return await Relationship.find(where).sort({ uploadedAt: -1 });
  },
  async findOnePopulate(where, populate) {
    return await Relationship.findOne(where).populate(populate);
  }
};

module.exports = RelationshipDataAccess;
