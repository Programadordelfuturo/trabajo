const express = require('express');
const db = require('./utils/database');
const flightRouter = require('./routes/flight')

const app = express();
const PORT = 8000

app.use(express.json());

db.query("SHOW TABLES", { type: db.QueryTypes.SHOWTABLES })
  .then(res => console.log(res))
  .catch(error => console.error(error));



app.use('/api', flightRouter)


app.listen(PORT, () => console.log(`Servicio iniciado en el puerto ${PORT}`))
