/*
9)From array:
  	const number = [1,2,3,4,5,6]
  	create an array were even numbers are multiplied by 3 as shown in the following array:
  	[1,6,3,12,5,18]
 */

const number = [1, 2, 3, 4, 5, 6]

let output = number.map(item => {
    if (item % 2 == 0) {
        return item * 3;
    }
    else {
        return item
    }

})

console.log(output)