function abc()
{
	var fso = new ActiveXObject("Scripting.FileSystemObject"); 

	var s = fso.OpenTextFile("C:\\Users\\cheryl\\Downloads\\lisa\\fileuploadfinal\\myTextLog.txt",1,true);

	var row = s.ReadLine();

	alert(row);

}