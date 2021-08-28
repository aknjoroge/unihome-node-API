let bookingController = require("./../controller/bookingController");
let express = require("express");

let routes = express.Router();

routes.get("/", bookingController.getAllBooking);

module.exports = routes;
