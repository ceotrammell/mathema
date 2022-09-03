export const conversiontable: Array<{ from: string, fromRate?: number, to: string, toRate: number, toRatePrefix?: string, extraParams?: Array<any> }> = [
    //area
    {
        from: 'sq inch',
        to: 'sq centimeter',
        toRate: 6.4516
    },
    {
        from: 'sq centimeter',
        to: 'sq inch',
        toRate: 0.1550
    },
    {
        from: 'sq feet',
        to: 'sq meter',
        toRate: 0.0929
    },
    {
        from: 'sq meter',
        to: 'sq yard',
        toRate: 1.195986
    },
    {
        from: 'sq yard',
        to: 'sq meter',
        toRate: 0.83613
    },
    {
        from: 'sq kilometer',
        to: 'sq mile',
        toRate: 0.386101
    },
    {
        from: 'sq mile',
        to: 'sq kilometer',
        toRate: 2.589999
    },
    {
        from: 'sq hectare',
        to: 'sq acre',
        toRate: 2.471044
    },
    {
        from: 'sq acre',
        to: 'sq hectare',
        toRate: 0.404687
    },

    //length
    {
        from: 'inch',
        to: 'centimeter',
        toRate: 2.540
    },
    {
        from: 'millimeter',
        to: 'inch',
        toRate: 0.03937
    },
    {
        from: 'feet',
        to: 'centimeter',
        toRate: 30.4878
    },
    {
        from: 'centimeter',
        to: 'inch',
        toRate: 0.3937
    },
    {
        from: 'yard',
        to: 'meter',
        toRate: 0.9144028
    },
    {
        from: 'meter',
        to: 'feet',
        toRate: 3.281
    },
    {
        from: 'mile',
        to: 'kilometer',
        toRate: 1.6093419
    },
    {
        from: 'kilometer',
        to: 'mile',
        toRate: 0.621371
    },

    //mass(weight)
    {
        from: 'ounce',
        to: 'gram',
        toRate: 28.3495
    },
    {
        from: 'gram',
        to: 'ounce',
        toRate: 0.03527396
    },
    {
        from: 'pound',
        to: 'ounces',
        toRate: 16
    },
    {
        from: 'pound',
        to: 'kilogram',
        toRate: 0.4535924
    },
    {
        from: 'kilogram',
        to: 'pound',
        toRate: 2.2046223
    },
    {
        from: 'short ton',
        to: 'metric ton',
        toRate: 0.892857
    },
    {
        from: 'metric ton',
        to: 'short ton',
        toRate: 1.1200
    },
    {
        from: 'long ton',
        to: 'metric ton',
        toRate: 1.01605
    },

    //temp
    {
        from: 'fahrenheit',
        to: 'celsius',
        toRate: NaN,
        extraParams: [ 
            {
                0: '(-32)*5/9'
            }
        ]
    },
    {
        from: 'celsius',
        to: 'fahrenheit',
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
        to: 'milliliter',
        toRate: 5
    },
    {
        from: 'milliliter',
        to: 'fluid ounce',
        toRate: 0.0338147
    },
    {
        from: 'tablespoon',
        to: 'milliliter',
        toRate: 15
    },
    {
        from: 'liter',
        to: 'pint',
        toRate: 2.11342
    },
    {
        from: 'liter',
        to: 'cubic centimeter',
        toRate: 1000
    },
    {
        from: 'fluid ounce',
        to: 'milliliter',
        toRate: 30
    },
    {
        from: 'liter',
        to: 'quart',
        toRate: 1.05671
    },
    {
        from: 'liter',
        to: 'gallon',
        toRate: 0.264178
    },
    {
        from: 'gallon',
        to: 'liter',
        toRate: 3.785332
    },
    {
        from: 'gallon',
        to: 'cubic inch',
        toRate: 231
    },
    {
        from: 'cup',
        to: 'liter',
        toRate: 0.23658
    },
    {
        from: 'pint',
        to: 'liter',
        toRate: 0.473167
    },
    {
        from: 'cubic meter',
        to: 'cubic feet',
        toRate: 35.3144
    },
    {
        from: 'cubic meter',
        to: 'cubic yard',
        toRate: 1.30794
    },
    {
        from: 'cubic feet',
        to: 'cubic meter',
        toRate: 0.0283170
    },
    {
        from: 'cubic yard',
        to: 'cubic meter',
        toRate: 0.764559
    },
]