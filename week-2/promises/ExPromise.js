function random(resolve){ //resolve is also a function, which is defined inside the promise class.
    resolve();

}

let p = new Promise (random);

function callback (){
    console.log("done");
}

p.then(callback);
console.log(p);

