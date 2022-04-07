const { fetchAll, fetch } = require("../../lib/fetch")

const HOUSE = `
SELECT 
  *
FROM
  house
Where
  complex_id = $1
`
const getHouse = (id)=> {
  return fetchAll(HOUSE, id)
}

const createHOUSE = `
INSERT INTO 
  house(house_price, house_rooms, house_size, house_location, complex_id) 
VALUES ($1, $2, $3, $4, $5) RETURNING *`

const createHouse = (price, rooms, size, location, reference)=> {
  
  return fetch(createHOUSE, price, rooms, size, location, reference)
}


module.exports = {
  getHouse,
  createHouse
}
