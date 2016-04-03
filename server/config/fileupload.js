// var fs = require('fs');
// var fileName = "myTextLog.txt";
// var abc;
exports.getReader = function(req,res)
{
  var fso = new ActiveXObject("Scripting.FileSystemObject"); 

  var s = fso.OpenTextFile("C:\\Users\\cheryl\\Downloads\\lisa\\fileuploadfinal\\myTextLog.txt",1,true);

  var row = s.ReadLine();

  alert(row);

}