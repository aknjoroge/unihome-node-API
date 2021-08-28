let fs = require("fs");

let owners = fs.readFileSync(
  `${__dirname}/../dev-data/data/owners.json`,
  "utf-8"
);
let ownersData = JSON.parse(owners);
exports.getOwners = function (req, res, next) {
  res.json({
    status: "success",
    data: {
      ownersData,
    },
  });
};
