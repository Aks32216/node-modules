import { isMainThread, parentPort, Worker, workerData } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";
import { exitCode } from "process";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)

if(isMainThread){
    const worker = new Worker(__filename, {workerData: {num: 5}});
    worker.on('message',(data)=>{
        console.log(data);
    })
    worker.on('error',(err)=>{
        console.log(err);
    })
    worker.on('exit',(exitCode)=>{
        console.log('worker exited with code',exitCode);
    })
} else {
    throw Error("error occured");
    process.exit(1);
    parentPort.postMessage(workerData.num*workerData.num);
}