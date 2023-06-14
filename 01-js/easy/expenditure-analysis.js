/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let hsmap=new Map();
  transactions.map((item)=>{
      let temp=0;
      if(hsmap.has(item.category)){
      temp=hsmap.get(item.category);}
      temp+=item.price;
      hsmap.set(item.category,temp);
  })
//   console.log(hsmap);
  let ans=[];
  for (let [key, value] of hsmap) {
     let obj = {};
    obj["category"] = key;
    obj["totalSpent"] = value;
      ans.push(obj);
}
  return ans;
}

module.exports = calculateTotalSpentByCategory;
