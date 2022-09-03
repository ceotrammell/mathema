import { conversiontable } from "../../helpers/conversiontable"
import { helpers } from "../../helpers/helpers";

/**
* 
* @param {string} from take in a from what converion type
* @param {string} to take in a to what conversion type
* @return {number} `quantity` take in a value to represent the `from` amount
*/
export function convert(from: string, to: string, quantity: number) {
        let i;
        let matched: boolean = true;
        for (i = 0; i < conversiontable.length; i++) {
            if (from.toLocaleLowerCase() === conversiontable[i]['from'] && to.toLocaleLowerCase() === conversiontable[i]['to']) {
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
            else if (i == conversiontable.length){ 
                throw new Error('missing proper from or to parameter');
            }
        }
}

export const conversion = {
    convert,
}