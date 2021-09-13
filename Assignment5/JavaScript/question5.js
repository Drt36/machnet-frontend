/*
5) Write a program to manipulate following data
  const personalInforamtion = [
   { name: 'Ram', address: 'Kathmandu' },
   { name: 'Gita', address: 'Lalitpur' },
   { name: 'Sita', address: 'Kathmandu' },
  ];
  Create a function that takes personalInforamtion as a single argument to return {kathmanudu: [Ram, Sita], lalitpur: [Gita]} 
   */


const personalInforamtion = [
    { name: 'Ram', address: 'Kathmandu' },
    { name: 'Gita', address: 'Lalitpur' },
    { name: 'Sita', address: 'Kathmandu' },
];


let kathmandu = [];
let lalitpur = [];
personalInforamtion.map(obj => {

    if (obj.address === 'Kathmandu') {
        kathmandu.push(obj.name);
    }
    else {
        lalitpur.push(obj.name)

    }
})

let output = { kathmandu, lalitpur };

console.log(output);