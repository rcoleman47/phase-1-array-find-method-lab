// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];
function superbowlWin(array){
  const result = array.find( ({result})=>result === "W")
  if(result){
    return Object.values(result)[0]
  };
};
// console.log(superbowlWin(record))
// const superbowlWins = record.find( ({result})=>result === "W")

// console.log(superbowlWins.result)