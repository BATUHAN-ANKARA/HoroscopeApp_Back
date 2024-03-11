const utils = require("../utils/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const blogService = require("../services/index");

exports.listAll = async (req, res) => {
 try {
   const json = await blogService.blogs.listAll();
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
