const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

//Create a restaurant
//PORT http://localhost:5000/api/v1/restaurants/
router.post("/", restaurantController.create);

//Get all restaurant
router.get("/", restaurantController.getAll);

//Get ById restaurant
router.get("/:id", restaurantController.getById);

//Update a restaurant
router.put("/:id", restaurantController.update);

//Delete a restaurant
router.delete("/:id", restaurantController.delete);

module.exports = router;
