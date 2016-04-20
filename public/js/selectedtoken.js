var q=0;  //counter for icons that need to be selected 
var sel_img;  //selected image

$('.token').click(function(){
var currentId = $(this).attr('id'); //know the id of the clicked icon

	if($(this).hasClass('shadow'))
	{
		$(this).removeClass('shadow');
		q = 0;
	}
	else
	{
		if(q==0)
		{
			$(this).addClass('shadow');
      sel_img = currentId;
			q = 1;
		}
		else
		alert("You have alredy selected 1 icon!");
	}
});


$('#signin-check').click(function(){
  var click=(sel_img===shudSelect);
  $.post('/update', {swar: uzer, tessera: click}, function(data) {
    //pass tokens to be saved.
  });
});