import { helpers } from "../../../helpers/helpers";

/**
* Take in an sets of 2 arrays, a and b, where two sets are those elements that belong to both sets, intersection.
* @param {Array<any>} a first array
* @param {Array<any>} b second array
* @return {number} array `a` and array `b` where the returned value is a intersection of both arrays.
*/
export function intersection(a: Array<any>, b: Array<any>): Array<any> {
    const newA = ((helpers.flatten(a)) || []);
    const newB = ((helpers.flatten(b)) || []);
    
    let res = newA.filter(a => newB.includes(a));

    return res;
}

/**
* Take in an sets of 2 arrays, a and b, where two sets are all the same elements from both sets, an union.
* @param {Array<any>} a first array
* @param {Array<any>} b second array
* @return {number} array `a` and array `b` where the returned value is a union of both arrays.
*/
export function union(a: Array<any>, b: Array<any>): Array<any> {
    const newA = ((helpers.flatten(a)) || []);
    const newB = ((helpers.flatten(b)) || []);
    
    let res = [...new Set([...newA, ...newB])];

    return res;
}

export const sets = {
    intersection,
    union,
}