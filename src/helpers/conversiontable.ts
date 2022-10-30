export const conversiontable: Array<{ from: string, fromShort: string, fromRate?: number, to: string, toShort: string, toRate: number, toRatePrefix?: string, extraParams?: Array<any> }> = [
    //area
    {
        from: 'sq inch',
        fromShort: 'sq in',
        to: 'sq centimeter',
        toShort: 'sq cm',
        toRate: 6.4516
    },
    {
        from: 'sq centimeter',
        fromShort: 'sq cm',
        to: 'sq inch',
        toShort: 'sq in',
        toRate: 0.1550
    },
    {
        from: 'sq feet',
        fromShort: 'sq ft',
        to: 'sq meter',
        toShort: 'sq m',
        toRate: 0.0929
    },
    {
        from: 'sq meter',
        fromShort: 'sq m',
        to: 'sq yard',
        toShort: 'sq yd',
        toRate: 1.195986
    },
    {
        from: 'sq yard',
        fromShort: 'sq yd',
        to: 'sq meter',
        toShort: 'sq m',
        toRate: 0.83613
    },
    {
        from: 'sq kilometer',
        fromShort: 'sq k',
        to: 'sq mile',
        toShort: 'sq mi',
        toRate: 0.386101
    },
    {
        from: 'sq mile',
        fromShort: 'sq mi',
        to: 'sq kilometer',
        toShort: 'sq k',
        toRate: 2.589999
    },
    {
        from: 'sq hectare',
        fromShort: 'sq ha',
        to: 'sq acre',
        toShort: 'sq ac',
        toRate: 2.471044
    },
    {
        from: 'sq acre',
        fromShort: 'sq ac',
        to: 'sq hectare',
        toShort: 'sq ha',
        toRate: 0.404687
    },

    //length
    {
        from: 'inch',
        fromShort: 'in',
        to: 'centimeter',
        toShort: 'cm',
        toRate: 2.540
    },
    {
        from: 'millimeter',
        fromShort: 'mm',
        to: 'inch',
        toShort: 'in',
        toRate: 0.03937
    },
    {
        from: 'feet',
        fromShort: 'ft',
        to: 'centimeter',
        toShort: 'cm',
        toRate: 30.4878
    },
    {
        from: 'centimeter',
        fromShort: 'cm',
        to: 'inch',
        toShort: 'in',
        toRate: 0.3937
    },
    {
        from: 'yard',
        fromShort: 'yd',
        to: 'meter',
        toShort: 'm',
        toRate: 0.9144028
    },
    {
        from: 'meter',
        fromShort: 'm',
        to: 'feet',
        toShort: 'ft',
        toRate: 3.281
    },
    {
        from: 'mile',
        fromShort: 'mi',
        to: 'kilometer',
        toShort: 'km',
        toRate: 1.6093419
    },
    {
        from: 'kilometer',
        fromShort: 'km',
        to: 'mile',
        toShort: 'mi',
        toRate: 0.621371
    },

    //mass(weight)
    {
        from: 'ounce',
        fromShort: 'oz',
        to: 'gram',
        toShort: 'g',
        toRate: 28.3495
    },
    {
        from: 'gram',
        fromShort: 'g',
        to: 'ounce',
        toShort: 'oz',
        toRate: 0.03527396
    },
    {
        from: 'pound',
        fromShort: 'lb',
        to: 'ounce',
        toShort: 'oz',
        toRate: 16
    },
    {
        from: 'pound',
        fromShort: 'lb',
        to: 'kilogram',
        toShort: 'kg',
        toRate: 0.4535924
    },
    {
        from: 'kilogram',
        fromShort: 'kg',
        to: 'pound',
        toShort: 'lb',
        toRate: 2.2046223
    },
    {
        from: 'short ton',
        fromShort: 'tn',
        to: 'metric ton',
        toShort: 'mt',
        toRate: 0.892857
    },
    {
        from: 'metric ton',
        fromShort: 'mt',
        to: 'short ton',
        toShort: 'tn',
        toRate: 1.1200
    },
    {
        from: 'long ton',
        fromShort: 'lt',
        to: 'metric ton',
        toShort: 'mt',
        toRate: 1.01605
    },

    //temp
    {
        from: 'fahrenheit',
        fromShort: 'f',
        to: 'celsius',
        toShort: 'c',
        toRate: NaN,
        extraParams: [ 
            {
                0: '(-32)*5/9'
            }
        ]
    },
    {
        from: 'celsius',
        fromShort: 'c',
        to: 'fahrenheit',
        toShort: 'f',
        toRate: NaN,
        extraParams: [ 
            {
                0: '(*9/5)+32'
            }
        ]
    },

    //volume
    {
        from: 'teaspoon',
        fromShort: 'tsp',
        to: 'milliliter',
        toShort: 'ml',
        toRate: 5
    },
    {
        from: 'milliliter',
        fromShort: 'ml',
        to: 'fluid ounce',
        toShort: 'fl oz',
        toRate: 0.0338147
    },
    {
        from: 'tablespoon',
        fromShort: 'tbsp',
        to: 'milliliter',
        toShort: 'ml',
        toRate: 15
    },
    {
        from: 'liter',
        fromShort: 'l',
        to: 'pint',
        toShort: 'pt',
        toRate: 2.11342
    },
    {
        from: 'liter',
        fromShort: 'l',
        to: 'cubic centimeter',
        toShort: 'cc',
        toRate: 1000
    },
    {
        from: 'fluid ounce',
        fromShort: 'fl oz',
        to: 'milliliter',
        toShort: 'ml',
        toRate: 30
    },
    {
        from: 'liter',
        fromShort: 'l',
        to: 'quart',
        toShort: 'qt',
        toRate: 1.05671
    },
    {
        from: 'liter',
        fromShort: 'l',
        to: 'gallon',
        toShort: 'gal',
        toRate: 0.264178
    },
    {
        from: 'gallon',
        fromShort: 'gal',
        to: 'liter',
        toShort: 'l',
        toRate: 3.785332
    },
    {
        from: 'gallon',
        fromShort: 'gal',
        to: 'cubic inch',
        toShort: 'cu in',
        toRate: 231
    },
    {
        from: 'cup',
        fromShort: 'c',
        to: 'liter',
        toShort: 'l',
        toRate: 0.23658
    },
    {
        from: 'pint',
        fromShort: 'pt',
        to: 'liter',
        toShort: 'l',
        toRate: 0.473167
    },
    {
        from: 'cubic meter',
        fromShort: 'cu m',
        to: 'cubic feet',
        toShort: 'cu ft',
        toRate: 35.3144
    },
    {
        from: 'cubic meter',
        fromShort: 'cu m',
        to: 'cubic yard',
        toShort: 'cu yd',
        toRate: 1.30794
    },
    {
        from: 'cubic feet',
        fromShort: 'cu ft',
        to: 'cubic meter',
        toShort: 'cu m',
        toRate: 0.0283170
    },
    {
        from: 'cubic yard',
        fromShort: 'cu yd',
        to: 'cubic meter',
        toShort: 'cu m',
        toRate: 0.764559
    },
]