// Difference between years. (Level 1)
var howManyYears = function(date1, date2){  
  return Math.abs(date1.slice(0,4) - date2.slice(0,4));
}