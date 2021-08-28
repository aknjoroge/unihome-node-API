let fs = require("fs");

let bookings = fs.readFileSync(`${__dirname}/../dev-data/data/bookings.json`);
let bookingsObjects = JSON.parse(bookings);

exports.getAllBooking = function (req, res, next) {
  res.json({
    status: "sucess",
    data: {
      bookingsObjects,
    },
  });
};
