/*
  Znasz i posługujesz się operatorami logicznymi

  || - OR
  && - AND
  ! - NOT

  (UWAGA! to nie to samo co:
    | 
    & 
    => to operatory bitowe, także ilość znaków & oraz | ma znaczenie!
  )
*/

// Jaki będzie wynik wykonania poszczególnych operacji: 

const a = true || false; // => 

const b = false && true; // => 

!false && true // => 

!(false && true) // => 

!(true && true) // => 

!(true || false) // =>

0 && 1 // => 

undefined && 2 // => 

true && 2 // => 

// Spróbuj się zmierzyć, a wyniki sprawdź w konsoli (Chrome Dev Tools)

// Jaki będzie wynik działania poniższego kodu: 

let a = 3, b = c = 1;

let x = a * c++;

let y = x + ++b;

/* 
Odp:
x = ?
y = ? 
c = ?
*/ 

