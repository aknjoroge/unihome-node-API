let locationController = require("./../controller/locationController");
let express = require("express");

let routes = express.Router();

routes.get("/", locationController.getAllLocation);

module.exports = routes;
