const { gql } = require("apollo-server");

module.exports = gql`
  
  extend type Query {
    calculate(bankId: ID! houseId: ID! duration: Int!): Data
  }
`