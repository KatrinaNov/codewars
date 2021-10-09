// Travelling on a Grid
function travelChessboard(s){
  const x1 = +s[1];
  const y1 = +s[3];
  const x2 = +s[6];
  const y2 = +s[8];
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
	return factorial(x2 - x1 + y2 - y1)/(factorial(x2 - x1) * factorial(y2 - y1));
}
console.log(travelChessboard('(2 2)(4 5)'));