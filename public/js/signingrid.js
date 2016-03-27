var pwd_set = new Array(4);	//reads user's password values
var p = new Array(4);		//randomizes password compnents
var flag=0;					//to maintain cel position

function session(a, b, c, d)
{
	//alert('hi');
	//document.getElementById('2|2').innerHTML='hello';
	pwd_set[0]=a;
	pwd_set[1]=b;
	pwd_set[2]=c;
	pwd_set[3]=d;

	var usedIcons = new Array(61);
	var usedPwrd = new Array(4);
	//defining 2D matix as JS doesn't support 2D matrix
	var usedPosition = new Array(6);
	for (var i=0; i<6; i++)
		usedPosition[i]=new Array(13);

	//select seed cell
	//3 & 10 instead of 5 and 12 so that the grid doesn't exceed the boundary
	///Math.floor((Math.random() * max) + min);
	var x1=Math.floor((Math.random() * 3) + 1)
	var y1=Math.floor((Math.random() * 10) + 1)

	//select random password component
	for (var i=0; i<4; i++)
	{
		var x=Math.floor(Math.random()*4);
		if (!usedPwrd[x])
		{
			usedPwrd[x]=true;		//password component taken
			p[i]=pwd_set[x];
			usedIcons[p[i]]=true;	//icon has been displayed
		}
		else
			i--;
	}

	//plot the vertices
	var x2=x1+2;		var y2=y1+2;
	
	document.getElementById(x1+'|'+y1).innerHTML=p[0];
	usedPosition[x1][y1]=true;
	document.getElementById(x1+'|'+y2).innerHTML=p[1];
	usedPosition[x1][y2]=true;
	document.getElementById(x2+'|'+y1).innerHTML=p[2];
	usedPosition[x2][y1]=true;
	document.getElementById(x2+'|'+y2).innerHTML=p[3];
	usedPosition[x2][y2]=true;

	alert(x1+'  '+y1+'|'+x1+'  '+y2+'|'+x2+'  '+y1+'|'+x2+'  '+y2);

	//display remaining images randomly
	for (var i = 1; i <= 5; i++)
	//var i = 1;
	//while(i <= 5)
	{ 
		//alert(i);
		for (var j = 1; j <= 12; j++) 
		//var j = 1;
		//while(j <= 12)
		{
			//alert(i+'  '+j);
			if (!usedPosition[i][j])
			{
				//alert('position');
				var x=Math.floor((Math.random() * 60) + 1)
				if (!usedIcons[x])
				{
					usedIcons[x]=true;
					usedPosition[i][j]=true;
					document.getElementById(i+'|'+j).innerHTML=x;
					alert('set '+i+','+j);
					flag=0;
					//j++;
				}
				else //if (flag == 0)
				{
					alert(x+' is used');
					j--;
					flag=1;
				}
			}
		}
		//i++;
	}
}