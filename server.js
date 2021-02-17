var http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const request = require('request');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
let cidades = [{
  "cidade" : 'pouso alto'
}
]

const apiKey = 'e306bc0cb38032abdae3550cf4782400';
  let ultimo = cidades[cidades.length - 1];

  console.log(ultimo)


  let url = `http://api.openweathermap.org/data/2.5/weather?q=${ultimo.cidade}&appid=${apiKey}&units=metric`
  let dados ='';

  request(url, function (err, response, body) {
    if(err){
     console.log('error:', error);
    } else {
     let weather = JSON.parse(body);
     dadosCity = `Dados Metereológicos para a ${weather.name}`
      dados = [
       {  name : `Dados Metereológicos para a ${weather.name}`},
       {  name : `-Temperatura: ${weather.main.temp}ºc%`},
       {  name: `-Velocidade vento:  ${weather.wind.speed}%`},
       {  name: `-Temp Máxima: ${weather.main.temp_max}ºC%`},
       {  name: `-Temp Minima: ${weather.main.temp_min}ºC%`},
       {  name:  `-Humidade: ${weather.main.humidity}%`}
         ]
         console.log(dados)
  
   
     if ((`${weather.main.temp}` >= 22) && (`${weather.main.temp}` < 32)){
   
       hits = "Pop"
       console.log(hits)
     }
   
     if ((`${weather.main.temp}` >= 10) && (`${weather.main.temp}` < 22)){
       hits = "Rock"
         console.log(hits)
       }
   
      if (`${weather.main.temp}` < 10) {
       hits = "Classica"
       console.log(hits)
   
      } 
     if(`${weather.main.temp}` )
    console.log('');
      }
   });

 
app.get('/temp',(req, res)=>{
  res.send(dados)

})




app.post('/cidades', function (req, res) {
  var newBook = {
      "cidade": req.body.txtNome,   
  }
  cidades.push(newBook)
  loadcity(cidades)
  console.log(cidades)

})

  
var server = http.createServer(app); 
server.listen(3002);
console.log("Servidor escutando na porta 3002...")


