function scrollTo(id) {
	$('html, body').animate({
								scrollTop: $(id).offset().top
							}, 'slow');
}

function OpenPortfolio(){
	document.getElementsByClassName('portfolio')[0].style="display:block;";
}

function ClosePortfolio(){
	document.getElementsByClassName('portfolio')[0].style="display:block;"+
																												"-ms-animation:slideOutDown 1s;"+
																												"-moz-animation:slideOutDown 1s;"+
																											  "-webkit-animation:slideOutDown 1s;"+
																											  "animation:slideOutDown 1s;";
	setTimeout(function(){
		document.getElementsByClassName('portfolio')[0].style="display:none;";
   }, 1000);
}

function HobbyAlert(id){
	if(id=="drawing"){
		alert("Drawing is one of my many talents.\n You could say I have gifted hands");
	}else if(id=="music"){
		alert("I listen to music while doing most of my daily activities");
	}else if(id=="code"){
		alert("Programming is my superpower, I spend 80% of my time coding");
	}else if(id=="web"){
		alert("I'm always surfing the web");
	}else if(id=="tv"){
		alert("You can find me watching some good ol' TV");
	}
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
