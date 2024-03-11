const userDal = require("../dal/index");
const Orders = require("../models/orders.model");
const fileService = require("./file.service");
const coffeDal = require("../dal/coffee.dal");
const Coffee = require("../models/coffee.model");
const coffeeDto = require("../dto/coffee.dto");


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

exports.updateCoffeeStatus = async (req, res) => {
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

exports.getCoffeeByUser = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.find({ user: id });
    console.log(json);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeResult = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeByUserContinue = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.find({ user: id, status: "Hazırlanıyor" });
    console.log(json);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCoffeeByUserFinished = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await coffeDal.find({ user: id, status: "Bitti" });
    console.log(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.purchaseCoin = async (req) => {
  try {
    const { id } = req.query;
    const { coinAmount } = req.body;
    const user = await userDal.user.findById(id);
    await userDal.user.updateById(id, {
      coins: user.coins + coinAmount
    });
    const updatedUser = await userDal.user.findById(id);
    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
};

exports.createOrder = async (req) => {
  try {
    const { id } = req.query;
    const { product, cost } = req.body;
    const order = new Orders({
      user: id,
      product: product,
      cost: cost
    });
    const json = await userDal.ordersDal.create(order);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateOrderStatusSuccess = async (req, res) => {
  try {
    const { id } = req.query;
    await userDal.ordersDal.updateById(id, {
      status: 1
    });
    const json = await userDal.ordersDal.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateOrderStatusFail = async (req, res) => {
  try {
    const { id } = req.query;
    await userDal.ordersDal.updateById(id, {
      status: -1
    });
    const json = await userDal.ordersDal.findById(id);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOrderByUserSuccess = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await userDal.ordersDal.find({ user: id, status: 1 });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOrderByUserFail = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await userDal.ordersDal.find({ user: id, status: -1 });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOrderByUserWaiting = async (req, res) => {
  try {
    const { id } = req.query;
    const json = await userDal.ordersDal.find({ user: id, status: 0 });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};