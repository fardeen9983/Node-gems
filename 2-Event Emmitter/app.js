// 2.0 Event Emitter

//Import events package
const EventEmiiter = require("events");
//Get an EventEmitter Object
const eventEmitter = new EventEmiiter();

/**
 * Attach a listenere to the EventEmitter Object using on method
 * arg0 => String/Number : event identifier 
 * arg1 => a method to be called when the event occurs (anonymous method used here)
 */
eventEmitter.on("tutorial",()=>{
    console.log("Event name : tutorial");
});
//Emit a 'tutorial' event
eventEmitter.emit("tutorial");

//Passing arguments to event listener
eventEmitter.on("sum",(n1,n2)=>{
    console.log("Sum : " + (n1+n2));
});
//Emit a 'sum' event
eventEmitter.emit("sum",2,3);

/**
 * Create Custom EventEmiiter : Extend EventEmiiter 
 * constructor arg : name => Set the name of the EventEmiiter
 * name getter : return its name
 */
class Person extends EventEmiiter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

//Create Person objects
let person = new Person("Dummy");
let person2 = new Person("Dummy2");
//Add a listener to Person objects
person.on("name",()=>{
    console.log("Person 1 : "+person._name);
});
person2.on("name",()=>{
    console.log("Person 2 : " + person2._name);
})
//Emit Person event : name 
//Done so synchronously in order of events being emitted
person.emit("name");
person2.emit("name");
