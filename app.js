//Headers
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


app.listen(process.env.PORT || 4000, function () {
    console.log("Server started on port 3000")
});