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
  return weight % 2 === 0 && weight > 3;
}
//Terminal game move function
function move (position, roll) {
  return position + roll*2;
}

function correct(string)
{
	var output = "";
  for (var i = 0; i < string.length; i++) {
    console.log(output, typeof string[i]);
    if (string[i] === '5') {
      output += 'S';
    } else if (string[i] === '0') {
       output += 'O';
    } else if (string[i] === '1') {
       output += 'I';
    } else {
      output += string[i];
    }
  }
   return output;
}
console.log(correct("L0ND0N"));

// You only need one - Beginner
function check(a, x) {
return a.includes(x);
}
console.log(check([101, 45, 75, 105, 99, 107], 107));

//Expressions Matter
function expressionMatter(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c), a*b+c, a+b*c);
}
//Area of a Square
function squareArea(A){
  return +Math.pow(2*A/Math.PI,2).toFixed(2);
}