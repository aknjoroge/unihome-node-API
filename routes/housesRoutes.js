let houseController = require("./../controller/houseController");
let express = require("express");

let routes = express.Router();

routes.get("/", houseController.getAllHouses);

module.exports = routes;
