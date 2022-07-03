function flatten(arr: Array<any>): Array<any> {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};

export function square(n: number, i: number, j: number): number {

    let mid = (i + j) / 2;
    let mul = mid * mid;
    if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
       return mid;
    }else if (mul < n){
       return square(n, mid, j);
    }else{
       return square(n, i, mid);
    }
 }

 // Function to find the square root of n
 export function sqrt(num: number): any {
    let i = 1;
    const found = false;
    while (!found){
       // If n is a perfect square
       if (i * i === num){
          return i;
       }else if (i * i > num){
          let res = square(num, i - 1, i);
          return res;
       };
       i++;
    }
 }

 export function factorialize(num: any): any {
   if (num < 0) 
         return -1;
   else if (num == 0) 
         return 1;
   else {
         return (num * factorialize(num - 1));
   }
}

export const helpers = {
    flatten,
    sqrt,
};