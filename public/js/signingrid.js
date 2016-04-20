var pwd_set = new Array(4);	//reads user's password values
var p = new Array(4);		//randomizes password compnents
var shudSelect;				//position the user should click on
var iconSet = new Array(6);	//the randomized icons to be displayed
	for (var i=0; i<6; i++)
		iconSet[i]=new Array(13);

function session(a, b, c, d, ico)
{
	pwd_set[0]=a;
	pwd_set[1]=b;
	pwd_set[2]=c;
	pwd_set[3]=d;

	var iconz = ico;
	var usedIcons = new Array(61);
	var usedPwrd = new Array(4);
	//defining 2D matix as JS doesn't support 2D matrix
	var usedPosition = new Array(6);
	for (var i=0; i<6; i++)
		usedPosition[i]=new Array(13);

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

	//square type
	var type=Math.floor((Math.random() * 2) + 1);
	switch(type){
		case 1://square
			//select seed cell
			//3 & 10 instead of 5 and 12 so that the grid doesn't exceed the boundary
			///Math.floor((Math.random() * max) + min);
			var x1=Math.floor((Math.random() * 3) + 1);
			var y1=Math.floor((Math.random() * 10) + 1);
			
			//plot the vertices
			var x2=x1;			var y2=y1+2;
			var x3=x1+2;		var y3=y1+2;
			var x4=x1+2;		var y4=y1;
			
			//calculate icon position to be clicked
			var m=(x1+x3)/2;	var n=(y1+y3)/2;
			break;
			
		case 2://diamond
			//select seed cell
			//3 & 2-11 instead of 5 and 1-12 so that the grid doesn't exceed the boundary
			///Math.floor((Math.random() * max) + min);
			var x1=Math.floor((Math.random() * 3) + 1);
			var y1=Math.floor((Math.random() * 11) + 2);

			//plot the vertices
			var x2=x1+1;		var y2=y1+1;
			var x3=x1+2;		var y3=y1;
			var x4=x1+1;		var y4=y1-1;

			//calculate icon position to be clicked
			var m=(x1+x3)/2;	var n=y1;
			break;
	}	

	//set taken position
	usedPosition[x1][y1]=true;
	usedPosition[x2][y2]=true;
	usedPosition[x3][y3]=true;
	usedPosition[x4][y4]=true;

	//display remaining images randomly
	for (var i = 1; i <= 5; i++)
	{ 
		for (var j = 1; j <= 12; j++) 
		{
			if (!usedPosition[i][j])
			{
				var x=Math.floor((Math.random() * 60) + 1)
				if (!usedIcons[x])
				{
					usedIcons[x]=true;
					usedPosition[i][j]=true;
					iconSet[i][j]=true;
					document.getElementById(i+'|'+j).src=iconz.data[x-1].picture;
					if(i==m && j==n)
					{
						shudSelect=i+'|'+j;
					}
				}
				else 
				{
					j--;
				}
			}
		}
	}
	
	//since a lag reveals the 4 icons
	document.getElementById(x1+'|'+y1).src=iconz.data[p[0]-1].picture;
	document.getElementById(x2+'|'+y2).src=iconz.data[p[1]-1].picture;
	document.getElementById(x3+'|'+y3).src=iconz.data[p[2]-1].picture;
	document.getElementById(x4+'|'+y4).src=iconz.data[p[3]-1].picture;
}