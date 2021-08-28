let fs = require("fs");

let location = fs.readFileSync(`${__dirname}/../dev-data/data/location.json`);
let locationObjects = JSON.parse(location);

exports.getAllLocation = function (req, res, next) {
  res.json({
    status: "sucess",
    data: {
      locationObjects,
    },
  });
};
