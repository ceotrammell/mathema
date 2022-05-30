import { constants } from '../../../constants/constants.js';

/**
* take in 1 radius value to get final area
* @param  {number} r value of radius
* @return {number} area of radius:`r`^2 * π
*/
export function area(r: number):number {
    return constants.pi * r**2;
}

/**
* take in 1 radius value to get final circumference
* @param  {number} r value of radius
* @return {number} circumference of 2 * π * radius:`r`
*/
export function circumference(r: number):number {
    return 2 * constants.pi * r;
}

/**
* take in 1 radius value to get final diameter
* @param  {number} r value of radius
* @return {number} diameter of 2 * radius:`r`
*/
export function diameter(r: number):number {
    return 2 * r;
}

export const circle = {
    area,
    circumference,
    diameter,
};