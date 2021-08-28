let express = require("express");
let ownersController = require("./../controller/ownersController");

let routes = express.Router();

routes.get("/", ownersController.getAll);
routes.post("/", ownersController.add);
routes.get("/:id", ownersController.getOne);
routes.delete("/:id", ownersController.delete);
routes.patch("/:id", ownersController.update);

module.exports = routes;
