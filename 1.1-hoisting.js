// // Co zwróci poniższy kod? (poprawność odpowiedzi sprawdzisz wykonując go, np. z wykorzystaniem "node <plik>")

// 1: 
console.log(`a = ${a}`)
var a;
a = 3;
// Odp: ?

// 2: 
b = 4;
console.log(`b = ${b}`)
var b;
// Odp: ?

// // 3: a co gdyby w powyższym przykładzie tego var b na końcu nie było ? 



















// console.log(x); // undefined

// if (true) {
//   var x = true; // function or global scope
// }

// console.log(x); // x

// if (true) {
//   let y = true; // block scope 
// }

// console.log(y); // ReferenceError


// great('James'); // Hello, James!
// greatMe('Kyle'); // TypeError, not a function !

// function great(name) {
//   console.log(`Hello, ${name}!`)
// }

// var greatMe = function(name) {
//   console.log(`Hello, ${name}!`);
// }

// greatMe('Kyle'); // 

// Jak myślisz, co się zadzieje gdy zamiast var greatMe pojawi się np. const?

// greatMe2('Amanda'); // ReferenceError: Cannot access 'greatMe2' before initialization

// const greatMe2 = function(name) {
//   console.log(`Hello, ${name}!`);
// }



// var x;
// var z;

// console.log(x); // undefined
// console.log(y); // Refe

if (true) {
  var x = true; // function or global scope
}

let y = 10;

// console.log(x); // x, true
// console.log(y); // 10

// var z = 15;

// var x = 20;
// console.log(x);

{
  // let y = 30;
  console.log(y)
  console.log(x)
}

// let y = 30;
// console.log(y)

function a() {
  let a = 10;

  // outer
  function b() {
    console.log(a);
  }
}