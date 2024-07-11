// สร้างในไฟล์ .env

HOST= "ep-silent-tooth-a1crjgie-pooler.ap-southeast-1.aws.neon.tech"
USER= "default"
PASSWORD= "XqHbVfFOY05k"
DB= "verceldb"
dialect= "postgres"

// เพิ่มในในไฟล์ db.config.js
require("dotenv").config({ path: "../.env" });
module.exports = {
HOST: process.env.HOST,
USER: process.env.USER,
PASSWORD: process.env.PASSWORD,
DB: process.env.DB,
dialect: process.env.dialect,
pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000,
},
};
