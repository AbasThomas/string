// String-1 -- helloName
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

// Examples

// helloName('Bob') → Hello Bob!
// helloName('Alice') → Hello Alice!
// helloName('X') → Hello X!

function helloName(name){
    return ("Hello "+ name + "!" )
  }


//   String-1 -- makeAbba
// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Examples

// makeAbba('Hi', 'Bye') → HiByeByeHi
// makeAbba('Yo', 'Alice') → YoAliceAliceYo
// makeAbba('What', 'Up') → WhatUpUpWhat


function makeAbba(a, b){
   return a + b + b + a;
}

