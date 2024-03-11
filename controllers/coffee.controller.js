const coffeeService = require("../services/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const utils = require("../utils/index");

exports.updateCoffeeStatus = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await coffeeService.coffee.updateCoffeeStatus(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.getCoffeeByUser = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await coffeeService.coffee.getCoffeeByUser(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.getCoffeeResult = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await coffeeService.coffee.getCoffeeResult(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.getCoffeeByUserContinue = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await coffeeService.coffee.getCoffeeByUserContinue(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.getCoffeeByUserFinished = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await coffeeService.coffee.getCoffeeByUserFinished(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.uploadCoffeePhoto = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await coffeeService.coffee.uploadCoffeePhoto(req);
    res.status(StatusCodes.OK).json(json);
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};
