var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

// When you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;

// alternate
// When you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart["pen"];

var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
console.log(properties);

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

console.log(shoppingCart);

// Set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart["mouse"] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);
