const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/listAll", controller.blogsController.listAll);

module.exports = {
  blog: router
};
