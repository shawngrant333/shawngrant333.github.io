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
