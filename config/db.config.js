require("dotenv").config();

module.exports = {
  HOST: "ep-silent-tooth-a1crjgie-pooler.ap-southeast-1.aws.neon.tech",
  USER: "default",
  PASSWORD: "XqHbVfFOY05k",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};