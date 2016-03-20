var x=0;  //counter for icons that need to be selected 
var y=0;  //counter for selected password
var point=0;  //point to the deselected 

var password = [0, 0, 0, 0];;
$('.icon').click(function(){
var currentId = $(this).attr('id'); //know the id of the clicked icon

		if($(this).hasClass('shadow'))
		{
  			$(this).removeClass('shadow');
  			x--;
        for(var i=0;i<4;i++)
        {
          if(password[i]==currentId)
          {
              password[i]=0;
              // point=i;
          }
        }
  			//$("#msg1").text('');
		}
		else
  		{
  			if(x<4)
  			{
  				$(this).addClass('shadow');
  				x++;
          // if(point!=0)
          // {
          //   password[point] = currentId;
          //   point=0;
          // }
          // else
          // {
          //   password[y] = currentId;
          //   y++;
          // }

          for(var i=0;i<4;i++)
          {
            if(password[i]==0)
            {
                password[i]=currentId;
                i=5;
                // point=i;
            }
          }

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
        alert(password[0]+','+password[1]+','+password[2]+','+password[3]);
				//alert("You can only select 4 icons!");
  		}
	
});