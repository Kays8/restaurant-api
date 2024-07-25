const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");
const { authJwt } = require("../middlewares");

//Create a restaurant ( Admin and Mod can use it! )
//PORT =>  http://localhost:5000/api/v1/restaurants/
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModOrAdmin],
  restaurantController.create
);

//Get all restaurant
router.get("/", restaurantController.getAll);

//Get ById restaurant
router.get("/:id", [authJwt.verifyToken], restaurantController.getById);

//Update a restaurant ( Admin and Mod can use it! )
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isModOrAdmin],
  restaurantController.update
);

//Delete a restaurant ( Admin can use it! )
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  restaurantController.delete
);

module.exports = router;
