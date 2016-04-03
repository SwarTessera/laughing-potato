function abc()
{
	var fso = new ActiveXObject("Scripting.FileSystemObject"); 

	var s = fso.OpenTextFile("C:\\Projects\\BE\\laughing-potato\\public\\js\\voiceLog.txt",1,true);

	var lines = s.ReadAll(); 
	s.Close(); 

	var splitline = lines.split('\r\n'); 
	var row = splitline[splitline.length-2];	
	
	alert(row);

}