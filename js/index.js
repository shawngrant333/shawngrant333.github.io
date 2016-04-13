while (true)
{
	if ($(window).scrollTop() > 20)
	{
		$('#head-name').fadeTo(500, 0).delay(500).css("display", "none");
	}
	else
	{
		$('#head-name').css("display", "block").fadeTo(500, 100);
	}
}

function scrollTo(id) {
	$('html, body').animate({ 
								scrollTop: $(id).offset().top
							}, 'slow');
}

