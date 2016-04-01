var fs = require('fs');
var fileName = "myTextLog.txt";
var abc;
exports.getReader = function(req,res)
{
  console.log("hi");
  fs.exists(fileName, function(exists) {
    if (exists) {
      fs.stat(fileName, function(error, stats) {
        fs.open(fileName, "r", function(error, fd) {
          var buffer = new Buffer(stats.size);

          fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
            abc = buffer.toString("utf8", 0, buffer.length);

            console.log(abc);
            fs.close(fd);
            res.render('test', {title:' | yeahahh!'});
          });
        });
      });
    }
  });
}

// var result;
// var fs = require("fs");
// // First I want to read the file
// function test()
// {
	
//     console.log('test');
// 	fs.readFile('myTextlog.txt', function read(err, data) {
// 	    if (err) {
// 	        throw err;
// 	    }
// 	if (Buffer.isBuffer(data))
// 	{ result = data.toString("utf8"); }
// 	    console.log(result[0]);
// });
// }