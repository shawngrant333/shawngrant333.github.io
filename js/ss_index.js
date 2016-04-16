var web_div=document.getElementsByClassName('web-dev')[0];
var mobile_div=document.getElementsByClassName('mobile-dev')[0];
var other_div=document.getElementsByClassName('other-dev')[0];

function OpenCategoryWeb() {
	document.getElementById('web').className = "active-skill";
	document.getElementById('mobile').className = "";
	document.getElementById('other').className = "";
	web_div.style.display = "block";
	mobile_div.style.display = "none";
	other_div.style.display = "none";
}

function OpenCategoryMobile() {
	document.getElementById('mobile').className = "active-skill";
	document.getElementById('web').className = "";
	document.getElementById('other').className = "";
	
	web_div.style.display = "none";
	mobile_div.style.display = "block";
	other_div.style.display = "none";
}

function OpenCategoryOther() {
	document.getElementById('other').className = "active-skill";
	document.getElementById('web').className = "";
	document.getElementById('mobile').className = "";
	
	web_div.style.display = "none";
	mobile_div.style.display = "none";
	other_div.style.display = "block";
}
