// เขียน Design pattern แบบ "Singleton"

const { DataType, DataTypes } = require("sequelize");
const sequelize = require("./db");

//define DB Schema

//สร้างชื่อของ Table Restaurant และสร้างข้อมูล(attribute)
const Restaurant = sequelize.define("restaurant", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Restaurant.sync({ force: false })
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.log("Error creating table: ", error);
  });

module.exports = Restaurant;
