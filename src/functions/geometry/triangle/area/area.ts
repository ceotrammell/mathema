import { constants } from '../../../../constants/constants.js';
import { helpers } from '../../../../helpers/helpers.js';

/**
* strictly for triangle type of ASA, also known as Angle-Side-Angle Postulate -> 
* take in 3 values, side a, angle b and angle y 
* @param  {number} b value for angle β(bilabial fricative)
* @param  {number} a value for side
* @param  {number} y value for angle γ(gamma)
* @return {number} Area with known 2 angles(β and γ) and 1 side for -> `a`^2 * sin(β:`b`) * sin(γ:`y`) / (2 * sin(β:`b` + γ:`y`))
*/
export function asa(b: number, a: number, y: number): number {    
    let unknownAngle = constants.triangle - b - y;

    if (b + y >= constants.triangle) {
        throw new Error('The angle sum b + y of triangle must be in the range from 0° to 180°.');
    }
    if (b >= constants.triangle) {
        throw new Error('The angle b of triangle must be in the range from 0° to 180°.');
    }
    if (y >= constants.triangle) {
        throw new Error('The angle y of triangle must be in the range from 0° to 180°.');
    }
    return 0.5 * (a)**2 * ((Math.sin(b * Math.PI / constants.triangle) * Math.sin(y * Math.PI / constants.triangle)) / (Math.sin(unknownAngle * Math.PI / constants.triangle)));
}

/**
* strictly for triangle with a height property only | does work for right angles strictly as well -> 
* take in 2 vlaues, b for base and h for height to get final area
* @param  {number} b value for length of the base
* @param  {number} h value for height or altitude of the triangle
* @return {number} Area with a height property for -> 0.5 * `b` * `h`
*/
export function height(b: number, h: number): number {    
    
    return 0.5 * b * h;
}

/**
* strictly for triangle type of SAS, also known as Side-Angle-Side Postulate -> 
* take in 3 values, side a, side b, and angle y
* @param  {number} a value for 1st side
* @param  {number} y value for angle γ(gamma)
* @param  {number} b value for 2nd side
* @return {number} Area with known 2 sides and 1 angle for -> 0.5 * `a` * `b` * sin(γ:`y`)
*/
export function sas(a: number, y: number, b: number): number {    
    
    if (y >= constants.triangle) {
        throw new Error('The angle y of triangle must be in the range from 0° to 180°.');
    }
    return  0.5 * a * b * Math.sin(y * Math.PI / constants.triangle);
}

/**
* strictly for triangle type of SSS, also known as Side-Angle-Side Postulate (Heron's formula) -> 
* take in 3 values, side a, b and c
* @param  {number} a value for 1st side
* @param  {number} b value for 2nd side
* @param  {number} c value for 3rd side
* @return {number} Area with known all 3 sides for -> 0.25 * √( (`a` + `b` + `c`) * (-`a` + `b` + `c`) * (`a` - `b` + `c`) * (`a` + `b` - `c`) )
*/
export function sss(a: number, b: number, c: number): number {    
    
    if (b + c <= a) {
        throw new Error('make sure b + c > a');
    }
    if (a + c <= b) {
        throw new Error('make sure a + c > b');
    }
    if (a + b <= c) {
        throw new Error('make sure a + b > c');
    }
    return 0.25 * helpers.sqrt( (a + b + c) * (-a + b + c) * (a - b + c) * (a + b - c) );
}

export const area = {
        asa,
        height,
        sas,
        sss,
}