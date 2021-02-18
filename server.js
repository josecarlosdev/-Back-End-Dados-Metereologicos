var http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/route/index')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(router)

var server = http.createServer(app); 
server.listen(3002);
console.log("Servidor escutando na porta 3002...")


