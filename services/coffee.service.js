const fileService = require("./file.service");
const coffeDal = require("../dal/coffee.dal");
const Coffee = require("../models/coffee.model");
const coffeeDto = require("../dto/coffee.dto");
const userDal = require("../dal/index");

exports.uploadCoffeePhoto = async (req, res) => {
  try {
    const { id } = req.query;
    const str = await fileService.uploadImageMultiple(req, res);
    const userId = await userDal.user.findById(id);
    const image = new Coffee({
      uri: str,
      user: userId._id
    });
    const json = await coffeDal.create(image);
    const new_amount = userId.coins - 20;
    await userDal.user.updateById(id, { coins: new_amount });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCoffeeStatus = async (req) => {
  try {
    const { id } = req.query;
    const { status, result } = req.body;
    const json = await coffeDal.updateById(id, {
      status: status,
      result: result
    });
    return {
      ...coffeeDto,
      uri: json.uri,
      user: json.user,
      uploadDate: json.uploadedAt,
      status: status
    };
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeByUser = async (req) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.find({ user: id });
    console.log(json);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeResult = async (req) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeByUserContinue = async (req) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.find({ user: id, status: "Hazırlanıyor" });
    console.log(json);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeByUserFinished = async (req) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.find({ user: id, status: "Bitti" });
    console.log(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};