const { fetchAll } = require("../../lib/fetch")

const BANK = `
SELECT 
    bank_id,
    bank_name,
    bank_upto,
    starting_payment,
    bank_service,
    mortgage_duration
FROM 
    bank
where 
  bank_upto = 
  (
    SELECT
	    MIN(bank_upto)
    FROM
	    bank
    WHERE
	    Replace(bank_upto,' ', '')::int >= 
      (
        SELECT 
          house_size * house_price as SUM
        FROM 
            house
        where 
          house_id = $1
      )
  )`

const getBank = (id)=> {
  return fetchAll(BANK, id)
}

module.exports = {
  getBank,
}


