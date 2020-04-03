var path = require("path")
var bodyParser = require("body-parser");
const cors = require("cors")
var express = require("express")
const fs = require("fs")

var app = express();
app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: "50mb",
        parameterLimit: 50000
    })
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/front/index.html"))
})

port = 3000
app.listen(port, () => {
    console.log(`Crypto is running in: http://localhost:${port}`);
    console.log("Made by: Mauricio Garzón - Esteban Bedoya");
})