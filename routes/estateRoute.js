let estateController = require("./../controller/estateController");
let express = require("express");

let routes = express.Router();

routes.get("/", estateController.getAllEstates);

module.exports = routes;
