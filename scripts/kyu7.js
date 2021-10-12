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
// console.log(connotation(str));

// Find the Missing Number
/*You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?*/
let arr1 = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15, 62, 35, 61, 99, 16];

function missingNo(nums) {
  for (let i = 0; i < 101; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    } 
  }
}
// console.log(missingNo(arr1));

// Simple Fun #152: Invite More Women?
function inviteMoreWomen(L) { 
  return L.filter(item => item === 1).length > L.length / 2;
}
// console.log(inviteMoreWomen([1, -1]));

// Are they square? Проверка, все ли числа квадратные
var isSquare = function(arr){
  if (arr.length === 0) return;
  const filterArr = arr.filter(n => (Math.sqrt(n)%1 === 0));
  console.log(filterArr);
  return arr.length === filterArr.length;
}
console.log(isSquare([1, 4, 7]));