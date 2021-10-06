//Multiplication table for number
var number = 5;
function multiTable(number) {
  // good luck
  let str = `1 * ${number} = ${number}`;  
  for (let i = 2; i < 11; i++) {   
    str += `\n${i} * ${number} = ${i*number}`;
  }
  return str;
}

// Watermelon
function divide(weight){
  //your code here
  return (weight - 2) % 2 === 0 && weight > 3;
}