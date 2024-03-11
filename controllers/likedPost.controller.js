const utils = require("../utils/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const likedPostService = require("../services/index");

exports.likePost = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await likedPostService.likedPost.likePost(req);
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

exports.getLikedPostById = async (req, res) => {
  try {
     const { id } = req.params;
    const json = await likedPostService.likedPost.getLikedPostById(id);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK
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
