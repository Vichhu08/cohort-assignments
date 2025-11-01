//sum of n number

function sum (n){
    return (n*(n+1))/2;
}

console.log(sum(10));

const fs = require("fs");

// synchonrously method

let contents = fs.readFileSync("./vichhu.txt", "utf-8"); // bytes,hex...
console.log(contents);  // need to open terminal and type - node " javascript.js " to run. 

let content2 = fs.readFileSync("./b.txt", "utf-8");
console.log(content2);


// Asunchornously method

function read (err,data){       
    console.log(data);
}
fs.readFile("./vichhu.txt", "utf8", read);
fs.readFile("./b.txt", "utf8", read);
console.log("END Done!");


