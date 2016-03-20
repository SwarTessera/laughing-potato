function session()
{
	//salert('hi');
	//document.getElementById('2|2').innerHTML='hello';

	var usedIcons = new Array(60);
	var usedPwrd = new Array(4);
	//defining 2D matix as JS doesn't support 2D matrix
	var usedPosition = new Array(5);
	for (var i=0; i<12; i++)
		usedPosition[i]=new Array(12);

	//select seed cell
	//3 & 10 instead of 5 and 12 so that the grid doesn't exceed the boundary
	var x=Math.floor(Math.random()*3);
	var y=Math.floor(Math.random()*10);
	usedPosition[x][y]=true;

	//select random password component
	var p = new Array(4);
	for (var i=0; i<4; i++)
	{
		var x=Math.ceil(Math.random()*4);
		if (!usedPwrd[x])
		{
			usedPwrd[x]=true;
			p[i]=x;
		}
		else
			i--;
	}

	//plot the vertices
	var x1=x+1;		var y1=y+1;
	var x2=x1+2;	var y2=y1+2;
	document.getElementById(x1+'|'+y1).innerHTML=p[0];
	document.getElementById(x1+'|'+y2).innerHTML=p[1];
	document.getElementById(x2+'|'+y1).innerHTML=p[2];
	document.getElementById(x2+'|'+y2).innerHTML=p[3];

	// //display remaining images randomly
	// for (var i = 0; i < 5; i++)
	// { 
	// 	for (var j = 0; j < 12; j++) 
	// 	{
	// 	//low (inclusive) and high (inclusive) 
	// 	//Math.floor(Math.random() * (high - low+1) + low);
	// 	var decision=Math.floor(Math.random()*25);
	// 	if (!usedLines[decision])
	// 	{
	// 		usedLines[decision]=true;
	// 		document.getElementById('line'+i).innerHTML=paragraphArray[decision];
	// 	}
	// 	}	
	// }
}