import { area } from './area/area.js';

/**
* take in 3 values, side a, b and c to get final surface area
* @param  {number} a value of 1st side
* @param  {number} b value of 2nd side
* @param  {number} c value of 3rd side
* @return {number} perimeter of `a` + `b` + `c`
*/
export function perimeter(a: number, b: number, c: number): number {

    if (b + c <= a) {
        throw new Error('make sure b + c > a');
    }
    if (a + c <= b) {
        throw new Error('make sure a + c > b');
    }
    if (a + b <= c) {
        throw new Error('make sure a + b > c');
    }
    return a + b + c;
}

export const triangle = {
    perimeter,
    area,
}