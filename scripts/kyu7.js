// Difference between years. (Level 1)
var howManyYears = function(date1, date2){  
  return Math.abs(date1.slice(0,4) - date2.slice(0,4));
}

//Password Check - Binary to String
const passwords = ['password123', 'admin', 'admin1'];
const bin = '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011';
function decodePass( passArr, bin ){
  const password = passArr.find(word => word == bin.split(' ').map(char => String.fromCharCode(parseInt(char, 2))).join(''));
  return password ? password : false;  
}

// Negative Connotation
/* You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).
Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").
Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.*/
const str = "  ikx  o i  l z     vi      t  q      gj";

const pos = str.split(' ').filter(word => word.charAt(0) < 'n');
function connotation(str) {
  const strToArr = str.split(' ').filter(word => word !== '');
  const pos = strToArr.filter(word => word.charAt(0).toLowerCase() < 'n');
  return 2 * pos.length >= strToArr.length;
}
console.log(connotation(str));
