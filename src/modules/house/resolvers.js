const { getHouse, createHouse } = require("./model")

module.exports = {
  Query: {
    house: async(_,{id},{ token })=> {
      try{
        const allHouse = await getHouse(id);
        return allHouse;
      } catch(err){
        console.log(err);
      }
    }
  },

  Mutation: {
    createHouse: async(_,{price, rooms, size, location, reference})=>{
      console.log(size, rooms, price, location, reference);
      if(price && rooms && size && location && reference){
      const newHouse = await createHouse(price, rooms, size, location,reference);
      return newHouse
      }      
      return new Error("Inputlarni to`ldiring")
    }
  },

  House: {
    id: global => global.house_id,
    size: global => global.house_size,
    rooms: global => global.house_rooms,
    price: global => global.house_price,
    location: global => global.house_location,
    reference: global => global.complex_id
  }
  
}