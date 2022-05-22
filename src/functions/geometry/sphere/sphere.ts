import { constants } from '../../../constants/constants.js';

/**
* take in 1 value, radius to get final surface area
* @param  {number} r value of radius
* @return {number} Surface Area of 4π * radius:`r`^2
*/
export function surfaceArea(r: number): number {

    return 4 * constants.pi * r ** 2;
}

/**
* take in 1 value, radius to get final surface area
* @param  {number} r value of radius
* @return {number} Surface Area of (4/3)π * radius:`r`^3
*/
export function volume(r: number): number {
    
    return (4/3) * constants.pi * r ** 3;
}

export const sphere = {
    surfaceArea,
    volume,
}