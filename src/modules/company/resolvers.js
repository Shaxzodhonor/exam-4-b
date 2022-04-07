const { getCompany, createCompany } = require("./model")

module.exports = {
  Query: {
    company: async(_,{},{ token })=> {
      try{
        const allCompany = await getCompany();
        return allCompany
      } catch(err){
        console.log(err);
      }
    }
  },

  Mutation: {
    createdCompany: async(_,{name})=>{
      if(name){
        const newCompany = await createCompany(name)
        return newCompany
      }
      return new Error("Inputlarni to'ldiring")

    }
  },

  Company: {
    id: global => global.company_id,
    name: global => global.company_name
  }
  
}