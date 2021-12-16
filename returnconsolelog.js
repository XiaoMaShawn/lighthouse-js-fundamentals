const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('john');

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('john');
