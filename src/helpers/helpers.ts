/**
* Take in an array to flatten
* @param {Array<any>} arr array to flatten
* @return {Array<any>} array `arr` used to flatten
*/
function flatten(arr: Array<any>): Array<any> {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};

/**
* Take in an string to parse
* @param {string} str string to parse
* @return {string} string `str` to parse
*/
function parse(str: string) {
   return Function(`'use strict'; return (${str})`)()
}

 /**
* Take in a string and inject a string or number into a specific position
* @param {string} str take in a string
* @param {number} splitAt take in a position you want to split at and to inject into
* @param {string | number} inject take in a string or number you want to inject
* @return {string} split `str` at `splitAt` and inject `inject` into that position 
*/
function sliceBuilder(str: string, splitAt: number, inject: number) {
   let front = str.slice(0, splitAt);
   let back  = str.slice(splitAt, str.length);
   return front + inject + back;
}

export function square(n: number, i: number, j: number): number {

   let mid = (i + j) / 2;
   let mul = mid * mid;
   if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
      return mid;
   }else if (mul < n){
      return square(n, mid, j);
   }else{
      return square(n, i, mid);
   }
}

export function sqrt(num: number): any {
   let i = 1;
   const found = false;
   while (!found){
      // If num is a perfect square
      if (i * i === num){
         return i;
      }else if (i * i > num){
         let res = square(num, i - 1, i);
         return res;
      };
      i++;
   }
}

export function factorialize(num: any): any {
   if (num < 0) 
         return -1;
   else if (num == 0) 
         return 1;
   else {
         return (num * factorialize(num - 1));
   }
}

export const helpers = {
   // atan,
   // derivative,
   flatten,
   parse,
   // pow,
   // round,
   sliceBuilder,
   sqrt,
};