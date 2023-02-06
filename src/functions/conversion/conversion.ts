import { conversiontable } from "../../conversions/conversiontable"
import { helpers } from "../../helpers/helpers";

/**
* 
* @param {string} from take in a from what converion type
* @param {string} to take in a to what conversion type
* @return {number} `quantity` take in a value to represent the `from` amount
*/
export function convert(from: string, to: string, quantity: number) {
    let i;
    let matched: boolean = false;
    for (i = 0; i < conversiontable.length; i++) {

        if (((from.toLocaleLowerCase() === conversiontable[i]['from']) || from.toLocaleLowerCase() === conversiontable[i]['fromShort']) &&
            ((to.toLocaleLowerCase()   === conversiontable[i]['to'])   || to.toLocaleLowerCase()   === conversiontable[i]['toShort'])) {
            matched = true;
            if (matched && !quantity) {
                throw new Error('missing quantity parameter');
            } else {
                if (!conversiontable[i]['extraParams']) {
                    return quantity * conversiontable[i]['toRate'];
                } else {
                    return helpers.parse(helpers.sliceBuilder(conversiontable[i]['extraParams']?.[0][0], 1, quantity));
                }
            }
        }
        if(!matched && i == conversiontable.length -1){ 
            throw new Error('missing proper from or to parameter, or it does not exist yet');
        }
    }
}

export const conversion = {
    convert,
}