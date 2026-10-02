import { MessageChannel } from "worker_threads";

const {port1,port2} = new MessageChannel();


port2.postMessage("Hello there");
port1.on('message',(data)=>{
    console.log("data received on port1");
})


port1.postMessage("Hello bere");
port2.on('message',(data)=>{
    console.log("data received on port2");
})