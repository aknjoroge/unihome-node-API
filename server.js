let app = require("./app");


//creating a server using express object
let server = app.listen(
    2000,function () {
        console.log("server started");
    }
)