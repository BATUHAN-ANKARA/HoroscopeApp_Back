const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.post("/postDaily", controller.minisoftController.postDaily);
router.post("/postWeekly", controller.minisoftController.postWeekly);
router.post("/postMonthly", controller.minisoftController.postMonthly);
router.put("/updateDaily", controller.minisoftController.updateDaily);
router.put("/updateWeekly", controller.minisoftController.updateWeekly);
router.put("/updateMonthly", controller.minisoftController.updateMonthly);

router.post("/addBlog", controller.minisoftController.addBlog);

router.post("/postRelationship", controller.minisoftController.postRelationship);

router.post("/postTarotDescription", controller.minisoftController.postTarotDescription);

module.exports = {
  minisoft: router
};
