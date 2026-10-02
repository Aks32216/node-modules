import { spawn } from "node:child_process";

// const ls=spawn('ls',['-lh', '.']);

// ls.stdout.on('data', (data) => {
//   console.log(data.toString());
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

const ps = spawn('ps')
const grep = spawn('grep', ['bash'])

ps.stdout.on('data', (data) => {
 grep.stdin.write(data)
})

ps.stderr.on('data', (data) => {
 console.error(`ps stderr: ${data}`)
})

ps.on('close', (code) => {
 if (code !== 0) {
  console.log(`ps process exited with code ${code}`)
 }
 grep.stdin.end()
})

grep.stdout.on('data', (data) => {
 console.log(data.toString())
})

grep.stderr.on('data', (data) => {
 console.error(`grep stderr: ${data}`)
})

grep.on('close', (code) => {
 if (code !== 0) {
  console.log(`grep process exited with code ${code}`)
 }
})