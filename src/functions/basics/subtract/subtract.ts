import { helpers } from '../../../helpers/helpers.js';

/**
* subtract two values, x - y.
* @param  {number} x first value to subtract from
* @param  {number} y second value to be subtracted
* @return {number} diference of `x` and `y`
*/
export function simple(x: number, y: number): number {
    return x - y;
};

/**
* subtract two array value pairs together, arr1 index value - arr2 index value.
* @param  {Array<any>} arr1 array 1 to loop
* @param  {Array<any>} arr1 array 2 to loop
* @return {Array<any>} array containing new differences of correlating value pairs from `arr1` and `arr2`
*/
export function twoArrays(arr1: Array<any>, arr2: Array<any>): Array<any> {
    const val = (arr1 || []).map(function (num, idx) {
        return num - arr2[idx];
    });
    return val;
};

/**
* loop 1d, 2d or multiD array and subtract all values together
* @param  {Array<any>} arr array to loop
* @return {number} difference of all values in `arr`
*/
export function multiD(arr: Array<any>): Array<any> {
    const val = ((helpers.flatten(arr)) || []).reduce((x: number,y: number) => x - y);
    return val;
};

export const subtract = {
    simple,
    twoArrays,
    multiD,
};