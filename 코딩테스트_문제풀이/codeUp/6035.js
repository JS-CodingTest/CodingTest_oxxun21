const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

console.log(parseFloat(input[0]) * parseFloat(input[1]));
