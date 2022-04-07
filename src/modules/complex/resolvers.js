const { getComplex, createComplex, getAllComplex } = require("./model")

module.exports = {
  Query: {
    complex: async(_,{id},{ token })=> {
      try{
        const allComplex = await getComplex(id);
        return allComplex;
      } catch(err){
        console.log(err);
      }
    },
    allComplex: async()=>{
      try{
        const allComplex = await getAllComplex();
        return allComplex;
      } catch(err){
        console.log(err);
      }
    }
  },

  Mutation: {
    createdComplex: async(_,{name, reference})=>{
     if(name && reference){
      const newComplex = await createComplex(name, reference)
      return newComplex
     }
     return new Error("Inputlarni to'ldiring")
    }
  },

  Complex: {
    id: global => global.complex_id,
    name: global => global.complex_name,
    reference: global => global.company_id
  }
  
}