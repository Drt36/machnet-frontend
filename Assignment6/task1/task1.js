const h1=document.getElementById("header");
console.log(h1);
h1.addEventListener('mouseover',highlight);


function highlight(){
    h1.style.color="red";
    h1.style.fontStyle='italic';
    console.log("working.");
}

