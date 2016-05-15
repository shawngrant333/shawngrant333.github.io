while (true)
{
	if ($(window).scrollTop() > 20)
	{
		var navbar=document.getElementsByClassName('navbar')[0];
		navbar.style.display="none";
	}
	else
	{
		var navbar=document.getElementsByClassName('navbar')[0];
		navbar.style.display="block";
	}
}

function scrollTo(id) {
	$('html, body').animate({ 
								scrollTop: $(id).offset().top
							}, 'slow');
}

function HobbyAlert(id){
	if(id=="drawing"){
		alert("Drawing is one of my many talents.\n You could say I have gifted hands");
	}else if(id=="music"){
		alert("I listen to music while doing most of my daily activities");
	}else if(id=="code"){
		alert("Programming is my superpower, I spend 80% of my time coding");
	}else if(id=="web"){
		alert("I'm surfing the web even when I have no reason to");
	}else if(id=="tv"){
		alert("When a computer isn't available you'll find me watching some good ol' TV");
	}
}
