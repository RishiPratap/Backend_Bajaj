const http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require('./routes/users');

const port = 3001;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/bfhl', usersRouter);

app.listen(port);