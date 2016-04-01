var q=0;  //counter for icons that need to be selected 
var tessera;  //selected image

$('.token').click(function(){
var currentId = $(this).attr('id'); //know the id of the clicked icon

		if($(this).hasClass('shadow'))
		{
  			$(this).removeClass('shadow');
        //tessera = 0;
  			q = 0;
     //    for(var i=0;i<4;i++)
     //    {
     //      if(password[i]==currentId)
     //      {
     //          password[i]=0;
     //          // point=i;
     //      }
     //    }
		}
		else
  		{
  			if(q==0)
  			{
  				$(this).addClass('shadow');
          tessera = currentId;
  				q = 1;
          
          // for(var i=0;i<4;i++)
          // {
          //   if(password[i]==0)
          //   {
          //       password[i]=currentId;
          //       i=5;
          //       // point=i;
          //   }
          // }
  			}
  			else
        alert(tessera);
				//alert("You can only select 4 icons!");
  		}
	
});


$('#signin-check').click(function(){
  var hi=tessera==shudSelect;
  $.post('/check', {tess: hi, swar: result}, function(data) {
    //console.log("whee!")
  });
});