
/*4) Create a function to display nth number in fibbonacci series (use of recursion is not allowed) */

let fibonacci = (num) => {

    let fseries = new Array(num + 1);

    fseries[0] = 0;
    fseries[1] = 1;

    //logic
    for (let i = 2; i <= num; i++) {

        fseries[i] = fseries[i - 1] + fseries[i - 2];
    }
    console.log(fseries)
    return fseries[num];
}

console.log(fibonacci(5))