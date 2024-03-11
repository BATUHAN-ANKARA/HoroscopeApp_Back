const zodiacService = require("../services/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const utils = require("../utils/index");

exports.getDaily = async (req, res) => {
  try {
    const { horoscopeName } = req.query;
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await zodiacService.zodiac.getDaily(horoscopeName);
    res.json({
      ...baseResponse,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      data: json
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.getWeekly = async (req, res) => {
  try {
    const { horoscopeName } = req.query;
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await zodiacService.zodiac.getWeekly(horoscopeName);
    res.json({
      ...baseResponse,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      data: json
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.getMonthly = async (req, res) => {
  try {
    const { horoscopeName } = req.query;
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const json = await zodiacService.zodiac.getMonthly(horoscopeName);
    res.json({
      ...baseResponse,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      data: json
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.getRelationship = async (req, res) => {
  try {
    const { horoscope1, horoscope2 } = req.query;
    const isInvalid = utils.helpers.handleValidation(horoscope1, horoscope2);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }

    const json = await zodiacService.zodiac.getRelationship(req);
    res.json({
      ...baseResponse,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK,
      data: json
    });
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