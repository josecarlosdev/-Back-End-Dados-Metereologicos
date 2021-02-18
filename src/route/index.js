const express = require('express');

const router =  express.Router()
const controller = require('../controller/index')


router.post('/cidades',controller.PostControllerApi);

router.get('/temp', controller.GetControllerApi);

router.get('/spotify',controller.ControllerSpotify)
  
module.exports = router;