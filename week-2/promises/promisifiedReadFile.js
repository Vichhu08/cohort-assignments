const fs = require("fs");

function readTheFile(resolve){
    fs.readFile("../vichhu.txt", "utf-8", function(err, data){
        resolve(data);
    })
}
    
const p = new Promise(readTheFile);

function callback (content){
    console.log(content);
}

p.then(callback);
console.log(p);
setTimeout(()=> console.log(p), 1000);
