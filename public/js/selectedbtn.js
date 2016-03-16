var x=0;
$('.icon').click(function(){

		if($(this).hasClass('shadow'))
		{
  			$(this).removeClass('shadow');
  			x--;
  			$("#msg1").text('');
		}
		else
  		{
  			if(x<4)
  			{
  				$(this).addClass('shadow');
  				x++;
  			}
  			else
				//$("#msg1").text('bello!');
        //$.jAlert('This is a custom alert box', 'Alert Dialog');
				alert("You can only select 4 icons!");
  		}
	
});