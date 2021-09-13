/*1) Write a program to display:
  h
  he
  hel
  hell
  hello
  hello!
*/



let inputStr = 'hello!';
let outputStr = '';

var strlength = inputStr.length;

for (let i = 0; i < strlength; i++) {

    outputStr += inputStr.charAt(i);
    console.log(outputStr);

}