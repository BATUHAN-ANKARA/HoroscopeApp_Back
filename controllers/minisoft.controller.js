const minisoftService = require("../services/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const utils = require("../utils/index");

exports.postDaily = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.postDaily(req);
    res.status(StatusCodes.OK).json(json);
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

exports.updateDaily = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.updateDaily(req);
    res.status(StatusCodes.OK).json(json);
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

exports.postWeekly = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.postWeekly(req);
    res.status(StatusCodes.OK).json(json);
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

exports.updateWeekly = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.updateWeekly(req);
    res.status(StatusCodes.OK).json(json);
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

exports.postMonthly = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.postMonthly(req);
    res.status(StatusCodes.OK).json(json);
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

exports.updateMonthly = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.updateMonthly(req);
    res.status(StatusCodes.OK).json(json);
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

exports.postRelationship = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.postRelationship(req);
    res.status(StatusCodes.OK).json(json);
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

exports.postTarotDescription = async (req, res) => {
  try {
    // const isInvalid = utils.helpers.handleValidation(req);
    // if (isInvalid) {
    //   res
    //     .status(StatusCodes.BAD_REQUEST)
    //     .json({ ...baseResponse, ...isInvalid });
    //   return;
    // }
    const json = await minisoftService.minisoft.postTarotDescription(req);
    res.status(StatusCodes.OK).json(json);
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

exports.addBlog = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await minisoftService.minisoft.addBlog(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.CREATED
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