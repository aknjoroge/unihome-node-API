let fs = require("fs");

let houses = fs.readFileSync(`${__dirname}/../dev-data/data/houses.json`);
let houseObject = JSON.parse(houses);

exports.getAllHouses = function (req, res, next) {
  res.json({
    status: "sucess",
    data: {
      houseObject,
    },
  });
};
