var x=0;  //counter for icons that need to be selected 
var y=0;  //counter for selected password
var point=0;  //point to the deselected 
var password = [0, 0, 0, 0];  //selected images

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
      }
    }
	}
	else
	{
		if(x<4)
		{
			$(this).addClass('shadow');
			x++;
      for(var i=0;i<4;i++)
      {
        if(password[i]==0)
        {
          password[i]=currentId;
          i=5;
        }
      }
		}
		else
		alert("You can only select 4 icons!");
	}
});


$('#signup-save').click(function(){
  $.post('/save', {pass1: password[0], pass2: password[1], pass3: password[2], pass4: password[3]}, function(data) {
    //pass password components to be saved.
  });
});