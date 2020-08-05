function scrollToElement(id) {
	$([document.documentElement, document.body]).animate({
								scrollTop: $(id).offset().top
							}, 'slow');
}

function openTab(evt, tabName) {

	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	tablinks = document.getElementsByClassName("tablinks");

	//


	if (evt.currentTarget.className == "tablinks active") { //already active
		evt.currentTarget.className = "tablinks"
		$("#"+tabName).slideUp("slow");
	} else { //make active
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		//document.getElementById(tabName).style.display = "block";

		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = "tablinks";
		}
		evt.currentTarget.className += " active";

		$("#"+tabName).slideDown("slow");
	}
	scrollToElement("#intro-social");
}
//document.getElementById("defaultTab").click();