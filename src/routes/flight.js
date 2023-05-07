const express = require('express');
const db = require('../utils/database');
const Passenger = require('../models/passenger')

const router = express.Router()

router.get('/', async (req, res)=>{
  const go = `doy el argumento:\n ${Passenger}`

  res.send(go)
})



module.exports = router;
