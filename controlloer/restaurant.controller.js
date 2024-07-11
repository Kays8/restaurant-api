const { AsyncQueueError } = require("sequelize");
const Restaurant = require("../models/restaurant.model"); //ต้อง import >> (../models/restaurant.model)

//Create and Save a new restaurant
exports.create = async (req, res) => {
  const { name, type, imageUrl } = req.body; //สลายโครงสร้าง
  //Validate data
  if (!name || !type || !imageUrl) {
    res.status(400).send({
      message: "Name, Type or ImageUrl can not be empty!",
    });
  }

  await Restaurant.findOne({ where: { name: name } }).then((restaurant) => {
    if (restaurant) {
      res.status(400).send({
        massage: "Restaurant already exists!",
      });
      return;
    }
    // create a restaurant สร้าง restaurant
    const newRestaurant = {
      name: name,
      type: type,
      imageUrl: imageUrl,
    };
    Restaurant.create(newRestaurant)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.massage ||
            "Somthing error occured while creating the restaurant.",
        });
      });
  });
};

//Get all restaurant สร้าง Get all
exports.getAll = async (req, res) => {
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.massage ||
          "Somthing error occured while creating the restaurant.",
      });
    });
};

//Get By ID restaurant สร้าง Get By ID
exports.getById = async (req, res) => {
  const id = req.params.id;
  await Restaurant.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No found Restaurant with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.massage ||
          "Somthing error occured while creating the restaurant.",
      });
    });
};

//UpdateById restaurant
exports.update = async (req, res) => {
  const id = req.params.id;
  await Restaurant.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Restaurant was update successfully" });
      } else {
        res.send({
          message:
            "Cannot update restaurant with id" +
            id +
            ". Maybe restaurant was not found or res.body is empty!",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.massage ||
          "Somthing error occured while creating the restaurant.",
      });
    });
};

//Delete restaurant
exports.delete = async (req, res) => {
  const id = req.params.id;
  await Restaurant.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Delete successfully" });
      } else {
        res.send({
          message: "Cannot Delete" + id + ".",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.massage ||
          "Somthing error occured while creating the restaurant.",
      });
    });
};
