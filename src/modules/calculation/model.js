const { fetch } = require("../../lib/fetch")

const SUM = `
SELECT 
  house_size * house_price as SUM
FROM 
  house
WHERE 
  house_id = $1`

function getSum(houseId){
  return fetch(SUM,houseId)
}

const BANK =`
SELECT
  starting_payment,
  bank_service
FROM
  bank
WHERE
  bank_id = $1`

function getBank(bankId) {
  return fetch(BANK, bankId)
}

module.exports = {
  getSum,
  getBank
}