const express = require('express');
const db = require('./utils/database');
const flightRouter = require('./routes/flight')

const app = express();
const PORT = 8000

app.use(express.json());

db.query("SHOW TABLES", { type: db.QueryTypes.SHOWTABLES })
  .then(res => console.log(res))
  .catch(error => console.error(error));


const passenger = [];
const boardingPass = [];
const seat = [];
const seatType = [];
const purchase = [];
const airplane = [];
const flight = [];


app.use('/flights', flightRouter)



db.query('SELECT * FROM passenger', { type: db.QueryTypes.SELECT })
  .then((res) => {
    passenger.push(...res)
  })
  .catch(error => console.error(error));

// db.query('SELECT u.seat_id, u.flight_id, p.landing_airport FROM boarding_pass u left join flight p on u.flight_id = p.flight_id', {
//   type: db.QueryTypes.SELECT
// }).then((res) => { console.log(res) })

// db.query('SELECT * FROM purchase', { type: db.QueryTypes.SELECT })
//   .then((res) => {
//     //const propiedades = await passenger.describe()
//     console.log(res)
//   })
//   .catch(error => console.error(error));

// db.query('SELECT * FROM boarding_pass', { type: db.QueryTypes.SELECT })
//   .then((res) => {
//     //const propiedades = await passenger.describe()
//     console.log(res)
//   })
//   .catch(error => console.error(error));

// db.query(`SELECT f.flight_id, f.takeoff_date_time, f.takeoff_airport, f.landing_date_time, f.landing_airport, f.airplane_id, p FROM flight f JOIN boarding_pass b ON f.flight_id = b.flight_id JOIN passenger p ON b.passenger_id = p.passenger_id`, 
//   { type: db.QueryTypes.SELECT })
//   .then((res) => {
//     //const propiedades = await passenger.describe()
//     console.log(res)
//   })
//   .catch(error => console.error(error));

// db.query('SELECT * FROM seat', { type: db.QueryTypes.SELECT })
//   .then((res) => {
//     //const propiedades = await passenger.describe()
//     console.log(res)
//   })
//   .catch(error => console.error(error));

// db.query('SELECT * FROM seat_type', { type: db.QueryTypes.SELECT })
//   .then((res) => {
//     //const propiedades = await passenger.describe()
//     console.log(res)
//   })
//   .catch(error => console.error(error));

// db.query('SELECT * FROM flight', { type: db.QueryTypes.SELECT })
//   .then((res) => {
//     //const propiedades = await passenger.describe()
//     console.log(res)
//   })
//   .catch(error => console.error(error));

// db.query('SELECT * FROM airplane', { type: db.QueryTypes.SELECT })
//   .then((res) => {
//     //const propiedades = await passenger.describe()
//     console.log(res)
//   })
//   .catch(error => console.error(error));


app.listen(PORT, () => console.log(`Servidor escuchado en el puerto ${PORT}`))