function flatten(arr: Array<any>): Array<any> {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};

export const helpers = {
    flatten,
};