import { helpers } from "../../../../helpers/helpers";

/**
* Take in an array of numbers and find the greatest common divisor
* @param {Array<any>} arr Array to loop
* @return {number} array `arr` used as greatest common divisor, returned as a number  
*/
export function arr(arr: Array<any>): number {
    const newArr = ((helpers.flatten(arr)) || []);
    let res = newArr[0];
    for (let i = 1; i < newArr.length; i++) {
        res = pair(newArr[i], res);

        if (res == 1) {
            return 1;
        }
    }
    return res;
}

/**
* Take in an set of 2 numbers, x and y, and find the greatest common divisor
* @param {number} x first number
* @param {number} y second number
* @return {number} number `x` and number `y` used as greatest common divisor, returned as a number  
*/

export function pair(x: number, y: number): number | undefined{
    let res;
    for (let i = 1; i <= x && i <= y; i++) {

        if( x % i == 0 && y % i == 0) {
            res = i;
        }
    }
    return res;
}

export const gcd = {
    arr,
    pair
}