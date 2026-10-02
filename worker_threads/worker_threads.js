// import express from "express";
// import {isMainThread, parentPort, Worker} from "node:worker_threads";
// import path from "node:path";
// import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app=express();
// app.use(express.json());

// app.get('/fibonacci',async (req,res)=>{
//     const {number}=req.query;
//     console.log(number);

//     const worker = new Worker(path.resolve(__dirname, "./worker.js"));

//     worker.postMessage(number);

//     worker.once("message", (result) => {
//         res.status(200).json({ result });
//     });

//     worker.once("error", (err) => {
//         console.error(err);
//         res.status(500).json({ error: "Worker error" });
//     });

//     worker.once("exit", (code) => {
//         if (code !== 0) {
//         console.error(`Worker exited with code ${code}`);
//         if (!res.headersSent) {
//             res.status(500).json({ error: "Worker exited unexpectedly" });
//         }
//         }
//     });
// })

// app.listen(3000,()=>{
//     console.log("listening on port 3000");
// })

import {Worker} from "node:worker_threads";

const worker = new Worker('./worker.js',{workerData: {num: 5}});

worker.on('message',(data)=>{
    console.log('square of num: ',data);
})

worker.on('error',(err)=>{
    console.log(err);
})

console.log("hurrey");