import { factorialize } from "../../../helpers/helpers";
import { combination } from "../combination/combination";

/**
* Take in an set of 2 numbers, n and r and boolean order o, where n is the number of total items and r is the number of picked items. 
* Do verify if order matters or not. Default if left blank is true.
* @param {number} n number of items
* @param {number} r picked number of items
* @param {boolean} o does order matter, true or false. true if no value provided
* @return {number} number of items `n` and number picked items `r` based on `o` order truth or false, resulting in an nPr permutation result 
*/
export function npr(n: number, r: number, o?: boolean) {
    // check order value
    if (o == undefined) {
        o = true;
    }

    // order matters
    if (o) {
        return ((factorialize(n)) / factorialize((n - r)))
    }

    // order does not matter; just do combination
    if (!o) {
        return combination.ncr(n, r);
    }
}

export const permutation = {
    npr,
}