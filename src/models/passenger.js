const db = require('../utils/database');

async function PassengerFunction () {
  const passengerData = db.query('SELECT * FROM passenger', (err, results, fields) => {
    if(err) throw err;
    console.log(results)
    return results 
  });
  

  return passengerData
}

module.exports = PassengerFunction;

// { type: db.QueryTypes.SELECT }).then(res => )