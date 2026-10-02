// import { parentPort } from "node:worker_threads";

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }

//   let prev2 = 0;
//   let prev1 = 1;

//   for (let i = 2; i <= n; i++) {
//     const current = prev1 + prev2;
//     prev2 = prev1;
//     prev1 = current;
//   }

//   return prev1;
// }

// parentPort.on("message", (number) => {
//   const result = fibonacci(Number(number));
//   parentPort.postMessage(result);
// });

import {parentPort, workerData} from "node:worker_threads";

console.log(workerData);
parentPort.postMessage(workerData.num * workerData.num);