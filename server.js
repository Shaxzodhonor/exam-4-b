const { ApolloServer } = require("apollo-server")
const express = require("express")
const app = express()
const http = require("http")
const { PORT } =require("./config")
const modules = require("./src/modules")

const server = new ApolloServer({
  modules,
  context: ({req})=>{
    return {
      token: req.headers?.token
    }
  }
})
server.listen(PORT, console.log(PORT))