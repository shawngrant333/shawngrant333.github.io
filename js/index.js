if($(window).scrollTop()>20){
	$("#head-name").fadeTo(1000,0).delay(1000).css("display","none");
}else{
	$("#head-name").css("display","block").fadeTo(1000,100);
}

function scrollTo(id) {
	$('html, body').animate({ 
		scrollTop: $(id).offset().top
		}, 'fast');
	}


