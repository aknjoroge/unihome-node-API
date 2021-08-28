let fs = require("fs");

let estates = fs.readFileSync(`${__dirname}/../dev-data/data/estate.json`);
let estatesObjects = JSON.parse(estates);

exports.getAllEstates = function (req, res, next) {
  res.json({
    status: "sucess",
    data: {
      estatesObjects,
    },
  });
};
