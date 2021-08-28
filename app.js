//requiring express node js module
let express = require("express");
let userRootes = require("./routes/userRoutes");
let ownerRoutes = require("./routes/ownerRoutes");
let housesRoutes = require("./routes/housesRoutes");
let estateRoutes = require("./routes/estateRoute");
let bookingRoutes = require("./routes/bookingRoutes");
let locationRoutes = require("./routes/locationRoutes");
//initialize express
let app = express();

//limiting request json to 10kb
app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/users", userRootes);
app.use("/api/v1/owners", ownerRoutes);
app.use("/api/v1/houses", housesRoutes);
app.use("/api/v1/estates", estateRoutes);
app.use("/api/v1/bookings", bookingRoutes);
app.use("/api/v1/locations", locationRoutes);

app.get("/", function (req, res) {
  res.json({
    application: "UniHome",
    apiUrl: "/api/v1/",
    url: "unihome.techkey.co.ke",
  });
});

app.post("/", function (req, res) {
  res.json({
    application: "UniHome",
    apiUrl: "/api/v1/",
    url: "unihome.techkey.co.ke",
    method: "POST",
  });
});

module.exports = app;
