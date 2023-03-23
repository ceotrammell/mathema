/**
* taken in a number `num` that gives back the factorial
* @param {number} num number to factorialize
* @return {string} return `num`'s factorial -> `num!`
*/
export function factorialize(num: any): any {
   if (num < 0) 
         return -1;
   else if (num == 0) 
         return 1;
   else {
         return (num * factorialize(num - 1));
   }
}

/**
* Take in an array to flatten
* @param {Array<any>} arr array to flatten
* @return {Array<any>} array `arr` used to flatten
*/
export function flatten(arr: Array<any>): Array<any> {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};

/**
* Sub helper function: used to get matrix square truthy
* @param {Array<any>} matrix array
* @return {boolean} return the square truthy of `matrix`
*/
export function isMatrixSquare(arr: Array<any>): boolean {
   var row_count = arr.length;
   var row_sizes = []
   for(var i=0;i<row_count;i++){
       row_sizes.push(arr[i].length)
   }
   
   let val = [row_count, Math.min.apply(null, row_sizes)]

   if (val[0] != val[1])
   return false;

   return true;
}

/**
* Sub helper function: used to get matrix size of an array
* @param {Array<any>} matrix array
* @return {Array<any>} return the size of `matrix`
*/
export function matrixSize(arr: Array<any>): any {
   var row_count = arr.length;
   var row_sizes = []
   for(var i=0;i<row_count;i++){
       row_sizes.push(arr[i].length)
   }
   return [row_count, Math.min.apply(null, row_sizes)]
}

/**
* Sub helper function: take in an string to parse
* @param {string} str string to parse
* @return {string} return string `str` that is parsed
*/
export function parse(str: string) {
   return Function(`'use strict'; return (${str})`)()
}

/**
* Take in a single number, object or nested objects and get the power of it, based on multiplier, if any
* @param {Array<any> | number} entity single number or object of pair sets
* @param {number} multiplier multiplier to multiply against `entity`
* @return {string} return power result of `entity` based on `multiplier`
*/
export function pow(entity: Array<any> | number, multiplier: number): any {

   if (typeof entity == 'number') {
      return powerTaskNumber(entity, multiplier);
   } else if (typeof entity == 'object') {
      if (!isMatrixSquare(entity))
      throw new Error(`${matrixSize(entity)} is not a square`); 
      //todo
      return powerTaskObject(entity, multiplier)
      
   } else {
      throw new Error(`${typeof entity} type is not allowed`); 
   }
}

/**
* Sub helper function: used for pow, take in x and y to find the power of a number
* @param {number} x number
* @param {number} y number for power
* @return {string} return the power of `x` and `y`
*/
function powerTaskNumber(x: number, n: number) {
   if (n === 1) return x;
   let temp: number = powerTaskNumber(x, n >> 1);
   return n % 2
       ? x * temp * temp
       : temp * temp;
}

/**
* Sub helper function: used for pow, take in x and y to find the power of a object
* @param {Array<any>} x object
* @param {number} y number for power
* @return {string} return the power of `x` and `y`
*/
function powerTaskObject(x: Array<any>, n: number) {
   
}

/**
* Take in a number to round to the nearest dictated max decimal
* @param {number} num take in a number that will be rounded
* @param {number} decimals dictates max amount of decimals possible 
(0-15 only permitted)
* @return {string} return `num` as a rounded number based on amount of `decimals` chosen
*/
export function round(num: number, decimals: number): any {
   if (decimals < 0 || decimals > 15) {
      throw new Error('make sure `decimals` is >=0 || <=15'); 
   }
   let prefix: any = num + "e" + decimals;
   return Number(Math.round(prefix) + "e-" + decimals);
}

/**
* Take in a string and inject a string or number into a specific position
* @param {string} str take in a string
* @param {number} splitAt take in a position you want to split at and to inject into
* @param {string | number} inject take in a string or number you want to inject
* @return {string} split `str` at `splitAt` and place the `inject` into that position 
*/
export function sliceBuilder(str: string, splitAt: number, inject: string | number): any {
   let front = str.slice(0, splitAt);
   let back  = str.slice(splitAt, str.length);
   return front + inject + back;
}

/**
* taken in a number `num` that gives back the square root of a value
* @param {number} num number to find square root of
* @return {string} return `num`'s square root value
*/
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

/**
* Sub helper function: takes in a set of 3 numbers to help `sqrt` perform its task
* @param {number} n number
* @param {number} i number
* @param {number} j number
* @return {string} return `mid` or `square(n, mid, j)` or `square(n, i, mid)`
*/
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

export const helpers = {
   // atan,
   // derivative,
   factorialize,
   flatten,
   isMatrixSquare,
   parse,
   matrixSize,
   // pow,
   round,
   sliceBuilder,
   sqrt,
};