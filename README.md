<div align="center">
  <a href="https://www.chartjs.org/" target="_blank">
    <h1 align="center">MATHEMA</h1>
  </a>Make Math Merry
</div>

<p align="center">
    <a href="https://www.npmjs.com/package/mathema"><img src="https://img.shields.io/npm/v/mathema.svg"></a>
    <a href="https://www.npmjs.com/package/mathema"><img src="https://img.shields.io/npm/dm/mathema.svg"></a>
</p>

## Installation
#### Install Package
```shell
npm i mathema
```

## Usage
#### Import
```javascript
import  *  as  mathema  from  'mathema';
```

#### prefix useage
append <b><i>mathema.</i></b> in front of all functions if you are directly importing * as mathema.
Else for example, using <b><i>algebra.</i></b> only, import like so:
```javascript
import { algebra } from 'mathema';
```
## Usage Example
**[Mathema Example Angular Project](https://github.com/ceotrammell/mathema-example)**

## Functions

| Function                  | Params                     | Description                                                                                                   |
| ------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
|<h4><i>Algebra (Arithmetic):</i></h4>
<b>LCM</b>|
| algebra.arithmetic.lcm.arr()                 | `arr: any[]`                              | Take in an array of numbers and find the least common multiple                                                             |
| algebra.arithmetic.lcm.pair()       | `x: number, y: number` | Take in an set of 2 numbers, x and y, and find the least common multiple       |                                                       
 <b>GCD</b>|
| algebra.arithmetic.gcd.arr()                 | `x: number, y: number`                              | Take in an array of numbers and find the greatest common divisor                                                             |
| algebra.arithmetic.gcd.pair()       | `arr: any[]` | Take in an set of 2 numbers, x and y, and find the greatest common divisor                                                              
|<h4><i>Basics:</i></h4>|                                                                                                |
|<b>Add</b>|
| basics.add.simple()                 | `x: number, y: number`                              | add two values, x + y            
| basics.add.twoArrays()                 | `arr1: any[], arr2: any[]`                              | add two array value pairs together, arr1 index value + arr2 index value     
| basics.add.MultiD()                 | `arr: any[]`                              | loop 1d, 2d or multiD array and add all values together                                                      |
|<h4><i>Basics:</i></h4>                                                                                                |
<b>Subtract</b>|
| basics.subtract.simple()                 | `x: number, y: number`                              | subtract two values, x - y            
| basics.subtract.twoArrays()                 | `arr1: any[], arr2: any[]`                              | subtract two array value pairs together, arr1 index value - arr2 index value     
| basics.subtract.multiD()                 | `arr: any[]`                              | loop 1d, 2d or multiD array and subtract all values together
<b>Multiply</b>|
| basics.subtract.simple()                 | `x: number, y: number`                              | subtract two values, x - y            
| basics.subtract.twoArrays()                 | `arr1: any[], arr2: any[]`                              | subtract two array value pairs together, arr1 index value - arr2 index value     
| basics.subtract.multiD()                 | `arr: any[]`                              | loop 1d, 2d or multiD array and subtract all values together
<b>Divide</b>|
| basics.divide.simple()                 | `x: number, y: number`                              | divide two values, x / y.            
| basics.divide.twoArrays()                 | `arr1: any[], arr2: any[]`                              | divide two array value pairs together, arr1 index value / arr2 index value.     
| basics.divide.multiD()                 | `arr: any[]`                              | loop 1d, 2d or multiD array and dividing all values together|
|<h4><i>Conversion:</i></h4>|                                                                                                |
<b>Area (long hand conversion)</b>|
| conversion.convert()                 | `from: string` sq inch `,to: string` sq centimeter `, quantity: number`                              | `from` — take in a from what converion type, `to` — take in a to what conversion type, `quantity` take in a value to represent the `from` amount
<b>Length (short hand conversion)</b>|
| conversion.convert()                 | `from: string` in `,to: string` cm `, quantity: number`                              | `from` — take in a from what converion type, `to` — take in a to what conversion type, `quantity` take in a value to represent the `from` amount
<b>Mass</b>|
| conversion.convert()                 | `from: string, to: string, quantity: number`                              | `from` — take in a from what converion type, `to` — take in a to what conversion type, `quantity` take in a value to represent the `from` amount
<b>Temp</b>|
| conversion.convert()                 | `from: string, to: string, quantity: number`                              | `from` — take in a from what converion type, `to` — take in a to what conversion type, `quantity` take in a value to represent the `from` amount
<b>Volume</b>|
| conversion.convert()                 | `from: string, to: string, quantity: number`                              | `from` — take in a from what converion type, `to` — take in a to what conversion type, `quantity` take in a value to represent the `from` amount|
|<h4><i>Discrete:</i></h4>|                                                                                                |
<b>GCD (Euclidean Algorithm)</b>|
| discrete.gcd.arr()                 | `array: any[]` | Take in an array of numbers and find the greatest common divisor via Euclidean Algorithm (invokes parallel (fork-join pattern) as needed)
| discrete.gcd.pair()                 | `x: number, y: number` | Take in an set of 2 numbers, x and y, and find the greatest common divisor via Euclidean Algorithm|                                                                                              |
<b>Sets (Intersections, Unions)</b>|
| discrete.sets.intersection()                 | `a: any[], b: any[]` | Take in an sets of 2 arrays, a and b, where two sets are those elements that belong to both sets, intersection
| discrete.sets.union()                 | `a: any[], b: any[]` | Take in an sets of 2 arrays, a and b, where two sets are all the same elements from both sets, an union|                                                                                              |
<b>Combinations & Permutations</b>|
| discrete.combination.ncr()                 | `n: number, r: number` | Take in an set of 2 numbers, n and r, where n is the number of total items and r is the number of picked items
| discrete.sets.union()                 | `n: number, r: number, o?: boolean | undefined` | Take in an set of 2 numbers, n and r and boolean order o, where n is the number of total items and r is the number of picked items. Do verify if order matters or not. Default if left blank is true|
|<h4><i>Geometry:</i></h4>|                                                                                                |
<b>Circle</b>|
| geometry.circle.area()                 | `r: number` | take in 1 radius value to get final area
| geometry.circle.circumference()                 | `r: number` | take in 1 radius value to get final circumference|                                                                                              |
<b>Cylinder</b>|
| geometry.cylinder.diameter()                 | `h: number, v: number` | take in 2 values, height and volume to get final diameter
| geometry.cylinder.surfaceArea()                 | `r: number, h: number` | take in 2 values, radius and height to get final surface area|                                                                                              |
| geometry.cylinder.volume()                 | `r: number, h: number` | take in 2 values, radius and height to get final volume|                                                                                              |
<b>Rectangle</b>|
| geometry.rectangle.area()                 | `x: number, y: number` | take in 2 values of length and width to multiply by each other to get a area
| geometry.rectangle.perimeter()                 | `x: number, y: number` | take in 2 values of length and width to multiply by 2 each and then add together to get final perimeter|                                                                                              |
<b>Sphere</b>|
| geometry.sphere.surfaceArea()                 | `r: number` | take in 1 value, radius to get final surface area
| geometry.sphere.volume()                 | `r: number` | take in 1 value, radius to get final volume|                                                                                              |
<b>Square</b>|
| geometry.square.area()                 | `x: number` | take in 1 value and square it to get final area
| geometry.square.perimeter()                 | `x: number` | take in 1 value and multiply all sides to get final perimeter|                                                                                              |
<b>Triangle</b>|
| geometry.triangle.area.asa()                 | `a: number, b: number, y: number` | strictly for triangle type of ASA, also known as Angle-Side-Angle Postulate -> take in 3 values, side a, angle b and angle y
| geometry.triangle.area.height()                 | `b: number, h: number` | strictly for triangle with a height property only, does work for right angles strictly as well -> take in 2 vlaues, b for base and h for height to get final area|                                                                                              |
| geometry.triangle.area.perimeter()                 | `a: number, b: number, c: number` | take in 3 values, side a, b and c to get final surface area|                                                                                              |
| geometry.triangle.area.sas()                 | `a: number, y: number, b: number` | strictly for triangle type of SAS, also known as Side-Angle-Side Postulate -> take in 3 values, side a, side b, and angle y|                                                                                              |
| geometry.triangle.area.sss()                 | `a: number, b: number, c: number` | strictly for triangle type of SSS, also known as Side-Angle-Side Postulate (Heron's formula) -> take in 3 values, side a, b and c|                                                                                              
|<h4><i>Helpers:</i></h4>                                                                                                |
<b>Factorialize</b>|
| helpers.factorialize()                 | `num: any` | taken in a number num that gives back the factorial|
<b>Flatten</b>|
| helpers.flatten()                 | `arr: any[]` | Take in an array to flatten|
<b>Round</b>|
| helpers.flatten()                 | `num: number, decimals: number` | Take in a number num to round to the nearest dictated max number decimals (0-15 decimals only permitted)|
<b>Slice Builder</b>|
| helpers.sliceBuilder()                 | `str: string, splitAt: number, inject: string | number` | Take in a string and inject a string or number into a specific position|
<b>Square Root</b>|
| helpers.sqrt()                 | `num: number` | Take in a number num that gives back the square root of a value