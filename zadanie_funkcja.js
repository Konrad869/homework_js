"use strict";
const oblicz = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      return "Nieznany operator";
  }
};

console.log(oblicz(3, 5, "+"));
console.log(oblicz(3, 5, "-"));
console.log(oblicz(3, 5, "/"));
console.log(oblicz(3, 5, "*"));
