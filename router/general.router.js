const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.put("/purchaseCoin", controller.generalController.purchaseCoin);
router.post("/createOrder", controller.generalController.createOrder);
router.put("/orderSuccess", controller.generalController.updateOrderStatusSuccess);
router.put("/orderFail", controller.generalController.updateOrderStatusFail);
router.get("/getOrderByUserSuccess", controller.generalController.getOrderByUserSuccess);
router.get("/getOrderByUserFail", controller.generalController.getOrderByUserFail);
router.get("/getOrderByUserWaiting", controller.generalController.getOrderByUserWaiting);

router.get("/getTarotFortune", controller.tarotController.getTarotFortune);

router.post("/likePost", controller.likedPostController.likePost);
router.get("/getLikedPost/:id", controller.likedPostController.getLikedPostById);

module.exports = {
  general: router
};
