let bookingController = require("./../controller/bookingController");
let express = require("express");

let routes = express.Router();

routes.get("/", bookingController.getAllBooking);
routes.post("/", bookingController.add);
routes.get("/:id", bookingController.getOne);
routes.delete("/:id", bookingController.delete);
routes.patch("/:id", bookingController.update);

module.exports = routes;
