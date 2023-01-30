function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;
  // console.log(sum);
  return sum;
}
// add(45, 15);

var total = add(80, 20);
console.log("total", total);

function bringSomocha(money) {
  var somochaPrice = 10;
  var quantity = money / somochaPrice;
  return quantity;
}

var myTaka = 150;
var somochas = bringSomocha(myTaka);
console.log("Eating somochas: ", somochas);
