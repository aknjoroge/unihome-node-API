let app = require("./app");
const { post } = require("./routes/ownerRoutes");

//creating a server using express object
let port = 2000;
let server = app.listen(port, function () {
  console.log(`server started on port ${port}`);
});
