var fs = require("fs");

// Synchronous read
var data = fs.readFileSync('poem.txt');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");

// Asynchronous read
fs.readFile('music.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
