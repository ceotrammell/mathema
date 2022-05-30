
/**
* take in 1 value and square it to get final area
* @param  {number} x value to square by
* @return {number} area of length:`x`^2
*/
export function area(x: number): number {

    return x ** 2;
}

/**
* take in 1 value and multiply all sides to get final perimeter
* @param  {number} x value to multiple 4 sides total by
* @return {number} perimeter of length:`x`*4
*/
export function perimeter(x: number): number {

    return x * 4;
}

export const square = {
    area,
    perimeter,
};