const { getBank } = require("./model")

module.exports = {
  Query: {
    bank: async(_,{id},{ token })=> {
      try{
          const bank = await getBank(id)
          
          return bank;
        
      } catch(err){
        console.log(err);
      }
    }
  },

  Bank: {
    id: global => global.bank_id,
    name: global => global.bank_name,
    upto: global => global.bank_upto,
    duration: global => global.mortgage_duration,
    starting_payment: global => global.starting_payment,
    service: global => global.bank_service
  }
  
}