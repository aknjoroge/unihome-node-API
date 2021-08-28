let express = require("express");
let ownersController = require("./../controller/ownersController");

let routes = express.Router();

routes.get("/", ownersController.getOwners);

module.exports = routes;
