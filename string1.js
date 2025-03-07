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

// String-1 -- makeTags
// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

// Examples

// makeTags('i', 'Yay') → Yay
// makeTags('i', 'Hello') → Hello
// makeTags('cite', 'Yay') → Yay

function makeTags(tag, word){
    return "<" + tag + ">" + word + "</" + tag + ">";
}
// console.log( makeTags( 'i', 'Yay'));


// String-1 -- makeOutWord
// Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

// Examples

// makeOutWord('<<>>', 'Yay') → <>
// makeOutWord('<<>>', 'WooHoo') → <>
// makeOutWord('[[]]', 'word') → [[word]]

function makeOutWord(out, word){
    return  out.substring(0,2) + word + out.substring(2)
  }

// console.log(makeOutWord('<<>>', 'Yay'));

function extraEnd(str){
    return str.charAt(str.length - 2) + str.charAt(str.length - 1) + str.charAt(str.length - 2) + str.charAt(str.length - 1) + str.charAt(str.length - 2) + str.charAt(str.length - 1);
  }
//   console.log(extraEnd('Hello'));


// String-1 -- firstTwo
// Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

// Examples

// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab

  function firstTwo(str){
    return str.charAt(0) + str.charAt(1)
}

// String-1 -- firstHalf
// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

// Examples

// firstHalf('WooHoo') → WooHoo
// firstHalf('HelloThere') → HelloThere
// firstHalf('abcdefg') → abcdefg

function firstHalf(str){
    return str
  }

//   String-1 -- withoutEnd
// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

// Examples

// withoutEnd('Hello') → ell
// withoutEnd('java') → av
// withoutEnd('coding') → odin

function withoutEnd(str){
    return str.substring( 1, str.length-1)
  }

//   String-1 -- comboString
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

// Examples

// comboString('Hello', 'hi') → hiHellohi
// comboString('Hi', 'Hello') → HiHelloHi
// comboString('aaa', 'b') → baaab


function comboString(a, b){
    if (a.length > b.length)
        return b + a + b;
    else
      return a + b + a;
  }

//   String-1 -- nonStart
// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a, b){
    return a.substring(1) + b.substring(1)
  }

//   String-1 -- left2
// Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

// Examples

// left2('Hello') → lloHe
// left2('java') → vaja
// left2('Hi') → Hi

function left2(str){
    return str.substring(2) + str.substring(0, 2)
  }

//   String-1 -- right2
// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

// Examples

// right2('Hello') → loHel
// right2('java') → vaja
// right2('Hi') → Hi

function right2(str){
    return str.substring(str.length -2 ) + str.substring(0 , str.length - 2)
  }
//   String-1 -- theEnd
//   Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.
  
//   Examples
  
//   theEnd('Hello', true) → H
//   theEnd('Hello', false) → o
//   theEnd('oh', true) → o
  function theEnd(str, front){
    if (front == true)
            return str.substring(0,1) + str.substring(5);
         else(front == false)
            return str.substring(str.length - 1 );
    }
// /  console.log (theEnd( "hello", true));
  
// String-1 -- withoutEnd2
// Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

// Examples

// withoutEnd2('Hello') → ell
// withoutEnd2('abc') → b
// withoutEnd2('ab') →


function withoutEnd2(str){
    return str.substring(1, str.length -1)
  }

// console.log(withoutEnd2("a"));

