import { helpers } from "../../../helpers/helpers";

let isParallel: boolean = false;

/**
* Take in an array of numbers and find the greatest common divisor via Euclidean Algorithm, as well invode parallel (fork-join pattern) as needed
* @param {Array<any>} array Array to loop
* @return {number} array `array` used as greatest common divisor, returned as a number  
*/
export function arr(array: Array<any>): number {

    const newArr = ((helpers.flatten(array)) || []);
    let res = newArr[0];

    if (res.length <= 2 || isParallel) {
        for (let i = 1; i < newArr.length; i++) {
            res = pair(newArr[i], res);

            if (res == 1) {
                isParallel = false;
                return 1;
            }
        }
        return res;
    }
    // invode parallel (fork-join pattern)
    else {
        isParallel = true;
        
        const half = Math.ceil(newArr.length / 2);
        const left = newArr.slice(0, half);
        const right = newArr.slice(half);
 
        return pair(arr(left), arr(right));
    }
}

/**
* Take in an set of 2 numbers, x and y, and find the greatest common divisor via Euclidean Algorithm
* @param {number} x first number
* @param {number} y second number
* @return {number} number `x` and number `y` used as greatest common divisor, returned as a number  
*/

export function pair(x: number, y: number): number {
    while (x && y && x !== y) {
        if(x > y){
           [x, y] = [x - y, y];
        }else{
           [x, y] = [x, y - x];
        };
     };
     return x || y;
}

export const gcd = {
    arr,
    pair,
}