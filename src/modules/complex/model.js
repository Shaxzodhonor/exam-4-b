const { fetchAll, fetch} = require("../../lib/fetch")

const COMPLEX = `
SELECT 
  *
FROM
  complex
Where
  company_id = $1
`
const getComplex = (id)=> {
  return fetchAll(COMPLEX, id)
}

const createCOMPLEX = `
INSERT INTO 
  complex(complex_name, company_id) 
VALUES ($1, $2) RETURNING *`

const createComplex = (name, id)=> {
  return fetch(createCOMPLEX, name,id)
}

const AllComplex = `
SELECT 
  complex_id,
  complex_name
FROM
  complex
`

function getAllComplex(){
  return fetchAll(AllComplex)
}


module.exports = {
  getComplex,
  createComplex,
  getAllComplex  
}
