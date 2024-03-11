const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/getTarotFortune", controller.tarotController.getTarotFortune);

module.exports = {
  tarot: router
};