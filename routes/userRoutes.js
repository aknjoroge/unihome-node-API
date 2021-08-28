let express = require("express");

let userControler = require("../controller/usersController");

let routes = express.Router();

routes.get("/", userControler.getUsers);
routes.post("/", userControler.addUser);
routes.get("/:id", userControler.getOneUser);
routes.delete("/:id", userControler.deletUser);
routes.patch("/:id", userControler.updateUser);

module.exports = routes;
