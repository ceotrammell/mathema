import { factorialize } from "../../../helpers/helpers";

/**
* Take in an set of 2 numbers, n and r, where n is the number of total items and r is the number of picked items. 
* @param {number} n number of items
* @param {number} r picked number of items
* @return {number} number of items `n` and number picked items `r` based on order does not matter, resulting in an nCr combination result 
*/
export function ncr(n: number, r: number) {
    // order does not matter
        return ((factorialize(n)) / (factorialize(n - r) * (factorialize(r))))
}

export const combination = {
    ncr,
}