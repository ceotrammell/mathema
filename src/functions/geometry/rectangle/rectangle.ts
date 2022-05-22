
/**
* Take in 2 values of length and width to multiply by each other to get a area
* @param  {number} x value 1 to multiple by
* @param  {number} y value 2 to multiple by
* @return {number} Area of width/length:`x` * width/length:`y`
*/
export function area(x: number, y: number): number {

    return x * y;
}

/**
* Take in 2 values of length and width to multiply by 2 each and then add together to get final perimeter
* @param  {number} x value 1 to multiple * 2
* @param  {number} y value 2 to multiple * 2
* @return {number} Area of (width/length:`x` * 2) + (width/length:`y` * 2)
*/
export function perimeter(x: number, y: number): number {

    return (x * 2) + (y * 2);
}

export const rectangle = {
    area,
    perimeter,
};