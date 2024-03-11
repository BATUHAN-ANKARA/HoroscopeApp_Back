const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/getDaily", controller.zodiacController.getDaily);
router.get("/getWeekly", controller.zodiacController.getWeekly);
router.get("/getMonthly", controller.zodiacController.getMonthly);

router.get("/getRelationship", controller.zodiacController.getRelationship);

module.exports = {
  zodiac: router
};
