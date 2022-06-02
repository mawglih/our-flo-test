// with given two digit number sum its digits and return result

export const addTwoDigits = (n) => {
  return n.toString().split('').reduce((acc,num) => parseInt(num) + acc, 0);
}
//console.log(addTwoDigits(29)) returns 7
// ===================


// find the biggest product of adjscent elements in the array
export const adjacentElementsProduct = (inputArray) =>{
  let i = 0;
  let biggest = 0;
  while (i < inputArray.length - 1) {
    let product = inputArray[i] * inputArray[i+1];
    if(product > biggest) biggest = product;
    i++;
  }
  return biggest;
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); returns 21
// ===================

// create a Ceasar code (alphabethic shift) of the given string
export const alphabeticShift = (inputString) => {
  const ar = inputString.split('');
  for(let i = 0; i < ar.length;  i++) {
    let code = ar[i].charCodeAt(0)
    if(code === 122) {
      ar[i] = 'a';
    } else {
      ar[i] = String.fromCharCode(code + 1);
    }
  }
  return ar.join('');
}

// console.log(alphabeticShift('crazy')); 
// =============================

// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 

export const bishopAndPawn = (bishop, pawn) => {
  const board = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
  };
  const bishopX = board[bishop[0]];
  const bishopY = parseInt(bishop[1]);
  const pawnX = board[pawn[0]];
  const pawnY = parseInt(pawn[1]);

  if(bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnX) {
    return true;
  }
  return false;
}

// console.log(bishopAndPawn('a1', 'c3'));
// =============================

// Given a string, check if it can become a palindrome - disregarding the case
export const isCaseInsensitivePalindrome = (inputString) =>{
  const newStr = inputString.toLowerCase().split('').reverse().join('');

  return newStr === inputString.toLowerCase();
}

// console.log(isCaseInsensitivePalindrome('AaBaa')); true
// console.log(isCaseInsensitivePalindrome('abac'));  false
// ================================

// Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.
export const containsDuplicates = (a) => !(a.length === new Set(a).size);


// console.log(containsDuplicates([1, 2, 3, 1])); false
// console.log(containsDuplicates([3, 1]));  true
// ===============================

// You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.

export const depositProfit = (deposit, rate, threshold) =>  {
  let years = 0;
  while(deposit < threshold) {
    deposit += deposit * (rate / 100);
    years++;
  }
  return years;
}

// console.log(depositProfit(100, 20, 170))
// ==================================

// Check if all digits of the given integer are even.

export const evenDigitsOnly = (n) => {
  const arr = n.toString().split('');
  return arr.every(el =>  parseInt(el) % 2 === 0);
}
console.log("Hello Oleg")
console.log('Hi there');

// console.log(evenDigitsOnly(248622));
// console.log(evenDigitsOnly(642386));
// ====================================

// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

export const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
  let days = 0;
  let height = 0;
  while(height < desiredHeight) {
    days++;
    height += upSpeed;
    if(height < desiredHeight) {
      height -= downSpeed;
    }
  }
  return days;
}

// console.log(growingPlant(100, 10, 910))
// =====================================

// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

export const pigLatin = (str) => {
    const letters = str.split('');
    const vowels = /[aeiou]/;
    if (vowels.test(str[0])) return `${str}way`;
    while(!vowels.test(letters[0])) {
        letters.push(letters.shift())
    }
    return letters.join('') + 'ay';
}

// console.log(pigLatin("glove"));
// console.log(pigLatin("eight"));
// ====================================

// Reverse the provided string.
export const reverseAString = (str) => {
    return str.split('').reduce((acc, char) => char + acc, '')
}

// console.log(reverseAString('hello'));
// console.log(reverseAString('Howdy'));
// ======================================

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

export const sumOddFibonacciNums = (num) => {
    const seq = fib(num);
    let sum = 0;
    seq.forEach(item => {
        if(item % 2) {
            sum += item;
        }
    })
    return sum;
}

//get fib sequence
const fib = n => {
    let f = [1, 1];
    for(let i = 2; i <= n; i++) {
        let newF = f[i-2] + f[i-1];
        if(newF >= n) {
            return f;
        } else {
            f.push(newF);
        }
        
    }
}
// console.log(sumOddFibonacciNums(1000));
// console.log(sumOddFibonacciNums(4000000));
// console.log(sumOddFibonacciNums(10));