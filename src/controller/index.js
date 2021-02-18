const request = require('request');
var cidades = {
  cidade: {
    valeu: 'jundiai'
  }
}
const apiKey = 'e306bc0cb38032abdae3550cf4782400';
let dados = '';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidades.cidade.valeu}&appid=${apiKey}&units=metric`
class controller {

  
  GetControllerApi(req, res,) {
    

    request(url, (err, response, body) => {
      if (err) {
        console.log('error:', error);
      }
      else {
        let weather = JSON.parse(body);

        dados = [
          { name: `Dados Metereológicos para a ${weather.name}` },
          { name: `-Temperatura: ${weather.main.temp}ºc%` },
          { name: `-Velocidade vento:  ${weather.wind.speed}%` },
          { name: `-Temp Máxima: ${weather.main.temp_max}ºC%` },
          { name: `-Temp Minima: ${weather.main.temp_min}ºC%` },
          { name: `-Humidade: ${weather.main.humidity}%` }
        ]
        console.log(dados)
        res.json(dados)
      }
    })

  }

  PostControllerApi(req, res) {
    cidades.cidade.valeu = req.body.txtNome;
    console.log(cidades.cidade.valeu)
  }


  ControllerSpotify(req,res) {

    request(url, (err, response, body) => {
      if (err) {
        console.log('error:', error);
      } else {

        let weather = JSON.parse(body);

        const playlistId = {
          fest: '37i9dQZF1DWWEJlAGA9gs0',
          classical: '6IfGK9nLC9ChgD7FTZzkLJ',
          pop: '37i9dQZF1DX1ngEVM0lKrb',
          rock: '01zzqHy5rv189lOqeLJgl9'
        }

        if (`${weather.main.temp}` > 32) {
          return playlistId.fest
        } else if (`${weather.main.temp}` >= 22 && `${weather.main.temp}` < 32) {
          return playlistId.pop
        } else if (`${weather.main.temp}` >= 10 && `${weather.main.temp}` < 22) {
          return playlistId.rock
        } else {
          return playlistId.classical
        }
      
      }
        res.json(playlistId)
      
    })
   
  }


}
module.exports = new controller
