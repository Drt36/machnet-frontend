/*
2) Write a program to display: 
  hello!
  hello
  hell
  hel
  he
  h
*/
let inputStr = 'hello!';
let outputStr = '';

var strlength = inputStr.length;

for (let i = 0; i < strlength; i++) {

    outputStr = inputStr.slice(0, strlength - i)
    console.log(outputStr);

}