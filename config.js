const PORT = process.env.PORT || 9000;
const Connection = {
  local: "",
  online:"postgres://upbfluxb:Lfg_Hg0IWtHNDLYXReQWjYlK5He7Pxwa@ruby.db.elephantsql.com/upbfluxb"
}

module.exports = {
  PORT,
  Connection
}