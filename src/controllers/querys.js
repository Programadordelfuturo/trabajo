// async function querys() {
//   try {
//     const data = await db.query(`SELECT * FROM flight p WHERE p.flight_id=${id}`, { type: db.QueryTypes.SELECT });

//     const test = await db.query(`SELECT f.flight_id, b.passenger_id FROM flight f INNER JOIN boarding_pass b WHERE f.flight_id = ${id} AND b.flight_id = ${id}`)
    
//     const passenger = await db.query(`SELECT * FROM passenger`, { type: db.QueryTypes.SELECT })
//   } catch (error) {

//   }
// }