// Some fields and classes for exporting into a module

const sum = (n1,n2) => n1+n2;
const PI = 3.14;
class SomeMathObject {
    constructor(){
        console.log("Objkect created");
    }
}

module.exports = {sum : sum,PI : PI, SomeMathObject}