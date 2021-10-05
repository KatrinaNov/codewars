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