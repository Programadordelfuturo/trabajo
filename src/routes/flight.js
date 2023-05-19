const express = require('express');
const db = require('../utils/database');

const router = express.Router()


// router.get('/purchase', async (req, res)=>{
  
//   try {
//     const { id } = req.params
//     const boarding_passPurchase = await db.query(`SELECT b.seat_id, b.boarding_pass_id, b.purchase_id FROM boarding_pass b WHERE b.purchase_id = ${id}`)

//     // una compra puede tener muchas tarjetas de embarque asociadas y recuerda estan enlazadas por el id, entonces varias tarjetas pueden tener un id de compra

//     const purchase = await db.query(`SELECT p.purchase_id, b.boarding_pass_id FROM purchase p INNER JOIN boarding_pass b ON p.purchase_id = b.purchase_id`, { type: db.QueryTypes.SELECT });
   
//     res.json(purchase)
//   } catch (error) {
//     res.status(400).json({ code: 400, errors: "could not connect to db"})
//   }
// });

router.get('/purchase/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    // con esto saque la relacion entre pasajeros y compras, con la tabla pivote
    
    const purchases = await db.query(`SELECT p.name, p.age, p.dni, b.seat_id, s.seat_column, s.seat_row, b.seat_type_id, c.purchase_id FROM passenger p
    INNER JOIN boarding_pass b ON p.passenger_id = b.passenger_id
    INNER JOIN purchase c ON b.purchase_id = c.purchase_id
    INNER JOIN seat s ON b.seat_id = s.seat_id`) // WHERE c.purchase_id = ${id}
   

    // El vuelo por el cual consultaran

    const flight = await db.query(`SELECT * FROM purchase s WHERE s.purchase_id = ${id}`)
    // purchases[0]
    res.json(purchases)
  } catch (error) {
    res.status(400).json(error)
  }
})


    // necesito asientos para cada pasajero

module.exports = router;

// try {
//   const { id } = req.params
//   const data = await db.query(`SELECT * FROM flight f INNER JOIN boarding_pass b ON f.flight_id = ${id} AND b.flight_id = ${id} WHERE f.flight_id = b.flight_id`, { type: db.QueryTypes.SELECT })

//   console.log(data)
  
//   res.json({ code: 200, data: data })
// } catch (error) {
//   // if() {
  //   //   res.status(404).json({ code: 404, data: {}})
//   // } else if() {
//     res.status(400).json({ code: 400, errors: "could not connect to db"})
//   //}
// } p WHERE p.purchase_id = 1

// const purchases = await db.query(`SELECT * FROM boarding_pass b`, { type: db.QueryTypes.SELECT })

// const boardingPassSeat = await (await db.query(`SELECT * FROM boarding_pass b`, { type: db.QueryTypes.SELECT })).filter(e => e.seat_id !== null)

// const boardingPassSeatNull = await (await db.query(`SELECT * FROM boarding_pass b`, { type: db.QueryTypes.SELECT })).filter(e => e.seat_id === null)

// const purchase = await db.query(`SELECT * FROM purchase p INNER JOIN boarding_pass b ON p.purchase_id = b.purchase_id`, { type: db.QueryTypes.SELECT });

// const seat = await db.query(`SELECT * FROM seat`, { type: db.QueryTypes.SELECT })

// { ...data[0], passengers: passenger }
// { code: 200, data: { ...purchases }[0] }