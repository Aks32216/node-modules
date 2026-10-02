import { log } from 'console';
import events from 'events';

const eventEmitter = new events.EventEmitter();



/* ============================
   PRACTICE QUESTIONS
   Write your answer code below each question.
   ============================ */

// Q1. Create a new EventEmitter called `orderEmitter`.
// Register a listener on the 'orderPlaced' event that logs
// "Order received: <orderId>" where orderId is passed as an argument.
// Emit the event with orderId = 101.
function orderEmitter(orderId){
    console.log(`Order received: ${orderId}`);
}

eventEmitter.on('orderPlaced',orderEmitter);
eventEmitter.emit('orderPlaced',101);


// Q2. Use `once()` instead of `on()` to register a listener on 'login'
// that logs "User logged in". Emit the 'login' event three times in a row
// and observe how many times the listener actually runs.

function loginListener(){
    console.log("user logged in");
}

eventEmitter.once('login',loginListener);
eventEmitter.emit('login',loginListener);
eventEmitter.emit('login',loginListener);
eventEmitter.emit('login',loginListener);


// Q3. Register TWO separate listeners on the same event 'dataReceived'.
// One should log the data in uppercase, the other in lowercase.
// Emit 'dataReceived' with the string "Hello World".

function upperCase(data){
    console.log(data.toUpperCase());
}

function lowerCase(data){
    console.log(data.toLowerCase());
}

eventEmitter.on('dataReceived',upperCase);
eventEmitter.on('dataReceived',lowerCase);
eventEmitter.emit('dataReceived','Hello World');

// Q4. Emit an event 'greet' with multiple arguments: a name and an age.
// Register a listener that logs "Hi <name>, you are <age> years old".

function greet(name,age){
    console.log(`Hi ${name}, you are ${age} years old"`);
}

eventEmitter.on('greet',greet);

eventEmitter.emit('greet','amish',24);

// Q5. Use `emitter.removeListener()` (or `off()`) to unregister a listener
// after it has been called once manually (not using `once()`).
// Prove it was removed by emitting the event again and showing nothing happens.

eventEmitter.off('greet',greet);
eventEmitter.emit('greet','amish',24);



// Q6. Use `emitter.listenerCount('eventName')` to print how many listeners
// are attached to a particular event, before and after adding a new one.

function prints(){
    console.log("It just prints");
}

console.log(eventEmitter.listenerCount('print'));


eventEmitter.on('print',prints);
eventEmitter.on('print',greet);


eventEmitter.emit('print');

console.log(eventEmitter.listenerCount('print'));



