let fs = require("fs");

let estates = fs.readFileSync(`${__dirname}/../dev-data/data/estate.json`);
let estatesObjects = JSON.parse(estates);

exports.getAllEstates = function (req, res, next) {
  res.json({
    status: "sucess",
    response: estatesObjects.length,
    data: {
      estatesObjects,
    },
  });
};

exports.add = function (req, res) {
  let data = req.body;
  let id = { id: Math.random() };
  let newObject = Object.assign(id, data);
  estatesObjects.push(newObject);

  fs.writeFile(
    `${__dirname}/../dev-data/data/estate.json`,
    JSON.stringify(estatesObjects),
    function (error) {
      if (error) {
        res.json({
          status: "failed",
          error,
        });
      } else {
        res.status(201).json({
          status: "success",
          data: {
            newObject,
          },
        });
      }
    }
  );
};

exports.getOne = function name(req, res, next) {
  let parameter = req.params;
  let data = estatesObjects.find(function (element) {
    return element.id == parameter.id;
  });
  res.json({
    status: "succeszs",
    data,
  });
};

exports.delete = function (req, res, next) {
  let id = req.params.id;

  let data = estatesObjects.filter(function (element) {
    return element.id != id;
  });

  fs.writeFile(
    `${__dirname}/../dev-data/data/estate.json`,
    JSON.stringify(data),
    function (err) {
      if (err) {
        res.json({
          status: "failed",
          error,
        });
      } else {
        res.status(204).json({
          status: "success",
        });
      }
    }
  );
};

exports.update = function (req, res, next) {
  let id = req.params.id;

  res.json({
    status: "success",
    details: "Not yet implemented",
  });
};
