var content;
var fs = require("fs");
// First I want to read the file
fs.readFile('myTextlog.txt', function read(err, data) {
    if (err) {
        throw err;
    }
if (Buffer.isBuffer(data))
{ result = data.toString('utf8'); }
    content = result;

    /* 
Invoke the next step here however you like
    console.log(content[0]);   // Put all of the code here (not the best solution)
    processFile();        
  Or put the next step in a function and invoke it
});

function processFile() {
    console.log(content[1]);
}

*/