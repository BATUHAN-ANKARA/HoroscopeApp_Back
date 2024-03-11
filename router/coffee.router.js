const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.put("/uploadCoffeePhoto", controller.coffeeController.uploadCoffeePhoto);
router.put(
  "/updateCoffeeStatus",
  controller.coffeeController.updateCoffeeStatus
);
router.get("/getCoffeeByUser", controller.coffeeController.getCoffeeByUser);
router.get(
  "/getCoffeeByUserContinue",
  controller.coffeeController.getCoffeeByUserContinue
);
router.get(
  "/getCoffeeByUserFinished",
  controller.coffeeController.getCoffeeByUserFinished
);
router.get("/getCoffeeResult", controller.coffeeController.getCoffeeResult);

module.exports = {
  coffee: router
};
