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
          // $.ajax({ 
          //  url: '/selectedicon',
          //  type: 'PUT',
          //  //cache: false, 
          //  data: { field1: 1, field2: 2 }, 
          //  success: function(data){
          //     alert('Success!')
          //  }
          //  , error: function(jqXHR, textStatus, err){
          //      alert('text status '+textStatus+', err '+err)
          //  }
          //    })
          // });     
  			}
  			else
				//$("#msg1").text('bello!');
        //$.jAlert('This is a custom alert box', 'Alert Dialog');
				alert("You can only select 4 icons!");
  		}
	
});