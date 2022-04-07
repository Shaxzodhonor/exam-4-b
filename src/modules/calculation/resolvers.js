const { getBank, getSum } = require("./model")

module.exports = {
  Query: {
    calculate: async(_,{bankId, houseId, duration},{ token })=> {
      try{
        const {sum} = await getSum(houseId);
        if(sum){
          const { starting_payment,  bank_service } = await getBank(bankId);
          let st_payment = sum / 100 * starting_payment;
          let mthly_payment = (sum - st_payment) / (12 * duration);

          const calculate = {
            overall_price : sum,
            starting_payment: st_payment,
            monthly_payment: Math.ceil(mthly_payment),
            bank_service
          }
          return calculate;
        }
          
          return null;
        
      } catch(err){
        console.log(err);
      }
    }
  }
  
}