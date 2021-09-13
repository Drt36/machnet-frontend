/*
11) From the given string:
  const sentence = "the carrots on the table and the bananas on the table has dissappeared"
  create a function that takes sentence as a single argument to return { the: 4, carrots,1 on: 2, table:2, and:1, bananas:1 tab, has: 1, dissappeared:1}
 */

const sentence = "the carrots on the table and the bananas on the table has dissappeared";

const result = {};

sentence.split(" ").forEach(item => {
    if (result.hasOwnProperty(item)) {
        result[item] = result[item] + 1;
    }
    else {
        result[item] = 1;
    }
});

console.log(result);


