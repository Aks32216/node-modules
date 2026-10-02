// import http from 'node:http';
// import url from "node:url"

// const server = http.createServer((req,res)=>{
//     const bodyStream=[];
//     req.on('data',(chunk)=>{
//         bodyStream.push(chunk);
//     }).on('end',()=>{
//         console.log("body parsing done");
//         const bufferData=Buffer.concat(bodyStream);
//         const reqBody=JSON.parse(bufferData);

//         console.log(reqBody);
//     });
//     console.log("Hello world!");
// })


// server.listen(3000,'127.0.0.1',()=>{
//     console.log("server listening on 3000");
// })

// server.on('request', (req, res) => {
//   console.log('Client made a request');
// });


import http from 'node:http';

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "Hello World!" }));
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

server.on('connect',()=>{
    console.log("client connected");
})

