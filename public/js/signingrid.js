function session()
{
	//alert('hi');
	//document.getElementById('2|2').innerHTML='hello';

	var usedIcons = new Array(60);
	var usedPwrd = new Array(4);
	//defining 2D matix as JS doesn't support 2D matrix
	var usedPosition = new Array(5);
	for (i=0; i<12; i++)
		usedPosition[i]=new Array(12);

	//select seed cell
	var x=Math.floor(Math.random()*4);
	var y=Math.floor(Math.random()*12);
	usedPosition[x][y]=true;

	//select seed password component
	var p=Math.ceil(Math.random()*4);
	usedPwrd[p]=true;

	document.getElementById(x+'|'+y).innerHTML=x+'|'+y;
}