const { JSDOM } = require("jsdom");
const { window } = new JSDOM();

export function test(code, n) {
  let totalTime = 0;
  let totalSpace = 0;

  for (let i = 1; i <= 5; i++) {
    const start = window.performance.now();

    code(n);
    const stop = window.performance.now();
    let timeTaken = (stop - start) / 1000;
    totalTime += timeTaken;
    const used =
      Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100;
    totalSpace += used;
  }
  console.log("time taken in seconds ", totalTime / 5);
  console.log("space taken in mb", totalSpace / 5);
}
