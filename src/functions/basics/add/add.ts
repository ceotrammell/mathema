import { helpers } from '../../../helpers/helpers.js';

/**
* Add two values, x + y.
* @param  {number} x First value to add
* @param  {number} y Second value to add
* @return {number} Sum of `x` and `y`
*/
export function simple(x: number, y: number): number {
    return x + y;
};

/**
* Add two array value pairs together, arr1 index value + arr2 index value.
* @param  {Array<any>} arr1 Array 1 to loop
* @param  {Array<any>} arr1 Array 2 to loop
* @return {Array<any>} Array containing new sums of correlating value pairs from `arr1` and `arr2`
*/
export function twoArrays(arr1: Array<any>, arr2: Array<any>): Array<any> {
    const val = (arr1 || []).map(function (num, idx) {
        return num + arr2[idx];
    });
    return val;
};

/**
* Loop 1d, 2d or multiD array and add all values together
* @param  {Array<any>} arr Array to loop
* @return {number} Sum of all values in `arr`
*/
export function multiD(arr: Array<any>): Array<any> {
    const val = ((helpers.flatten(arr)) || []).reduce((x: number,y: number) => x + y);
    return val;
};

export const add = {
    simple,
    twoArrays,
    multiD,
};