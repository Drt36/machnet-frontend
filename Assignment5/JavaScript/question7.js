
/*
7)Sort the array given in no 6) by age in ascending as well as descending order
 */
const details = [
    { name: 'Ram', age: 15 },
    { name: 'Shyam', age: 21 },
    { name: 'Hari', age: 12 },
    { name: 'Bharat', age: 18 },
    { name: 'Sita', age: 24 },
];

let ascoutput = details.sort((range1, range2) => range1.age - range2.age);
console.log("Ascending:")
console.log(ascoutput)

let descoutput = details.sort((range3, range4) => range4.age - range3.age);
console.log("Descending:")
console.log(descoutput)