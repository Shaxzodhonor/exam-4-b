const { fetch, fetchAll } = require("../../lib/fetch")

const COMPANY = `
SELECT 
  *
FROM
  company
`
const getCompany = ()=> {
  return fetchAll(COMPANY)
}

const createCOMPANY = `
INSERT INTO 
  company(company_name) 
VALUES ($1) RETURNING *`

function createCompany(name) {
  return fetch(createCOMPANY,name)
}

module.exports = {
  getCompany,
  createCompany
}
