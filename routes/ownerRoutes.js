let express = require("express");
let ownersController = require("./../controller/ownersController");

let routes = express.Router();

routes.get("/", ownersController.getOwners);
routes.post("/", ownersController.addOwner);
routes.get("/:id", ownersController.getOneOwner);
routes.delete("/:id", ownersController.deletOwner);
routes.patch("/:id", ownersController.updateOwner);

module.exports = routes;
