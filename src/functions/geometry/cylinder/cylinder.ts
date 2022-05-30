import { constants } from '../../../constants/constants.js';
import { helpers } from '../../../helpers/helpers.js';

/**
* take in 2 values, height and volume to get final diameter
* @param  {number} h value of height
* @param  {number} v value of volume
* @return {number} diameter of 2 * (√ volume:`v`/π * height:`h`)
*/
export function diameter(h: number, v: number): number {

    return 2 * helpers.sqrt(v/(constants.pi * h));
}

/**
* take in 2 values, radius and height to get final surface area
* @param  {number} r value of radius
* @param  {number} h value of height
* @return {number} volume of (2π * radius:`r` * height:`h`) + (2π * radius:`r`^2)
*/
export function surfaceArea(r: number, h: number): number {

    return (2*constants.pi*r*h) + (2*constants.pi*r**2);
}

/**
* take in 2 values, radius and height to get final volume
* @param  {number} r value of radius
* @param  {number} h value of height
* @return {number} volume of π * radius:`r`^2 * height:`h`
*/
export function volume(r: number, h: number): number {

    return constants.pi * r ** 2 * h;
}

export const cylinder = {
    diameter,
    surfaceArea,
    volume,
};