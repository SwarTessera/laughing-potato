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
				$("#msg1").text('bello!');
				//alert("Hi");

  				// $.jAlert({
  				//     'title': 'It works!',
  				//     'content': 'YAY!',
  				//     'theme': 'green',
  				//     'btns': { 'text': 'close' }
  				//   });
  				//$("#msg1").html("You have alredy selected 4 icons!");
  		}
	
});