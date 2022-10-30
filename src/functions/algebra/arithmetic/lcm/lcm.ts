import { helpers } from "../../../../helpers/helpers";

/**
* Take in an array of numbers and find the least common multiple
* @param {Array<any>} arr Array to loop
* @return {number} array `arr` used as least common multiple, returned as a number  
*/
export function arr(arr: Array<any>): number {
    const newArr = ((helpers.flatten(arr)) || []);
    let n = 1;
    for(let i = 0; i < newArr.length; ++i){
       n = pair(newArr[i], n);
    }
    return n;
}

/**
* Take in an set of 2 numbers, x and y, and find the least common multiple
* @param {number} x first number
* @param {number} y second number
* @return {number} number `x` and number `y` used as least common multiple, returned as a number  
*/

// store highest number of x and y as min
export function pair(x: number, y: number): number {
    let min = (x > y) ? x : y;
    
    while (true) {
        if (min % x == 0 && min % y == 0) {
            return min;
        }
        min++;
    }
}

export const lcm = {
    arr,
    pair,
}