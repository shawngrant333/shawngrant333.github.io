function degToRad(degree) {
	var factor = Math.PI / 180;
	return degree * factor;
}

function setWebArc() {
	var C = document.getElementById("webCanvas");
	var ctx = C.getContext("2d");
	ctx.lineWidth = "20";
//For Html
	ctx.strokeStyle = "#C95411";
	ctx.beginPath();
	ctx.arc(150, 150, 120, degToRad(270), degToRad(220));
	ctx.stroke();

//For CSS
	ctx.strokeStyle = "#142DDF";
	ctx.beginPath();
	ctx.arc(150, 150, 100, degToRad(270), degToRad(200));
	ctx.stroke();

//For Javascript
	ctx.strokeStyle = "#E7DD14";
	ctx.beginPath();
	ctx.arc(150, 150, 80, degToRad(270), degToRad(150));
	ctx.stroke();

//For PHP
	ctx.strokeStyle = "#5A0076";
	ctx.beginPath();
	ctx.arc(150, 150, 60, degToRad(270), degToRad(120));
	ctx.stroke();
}

function setMobileArc() {
	var C = document.getElementById("mobileCanvas");
	var ctx = C.getContext("2d");
	ctx.lineWidth = "20";
//For JAVA
	ctx.strokeStyle = "#69E7D0";
	ctx.beginPath();
	ctx.arc(150, 150, 120, degToRad(270), degToRad(200));
	ctx.stroke();

//For XML
	ctx.strokeStyle = "#ff0f00";
	ctx.beginPath();
	ctx.arc(150, 150, 100, degToRad(270), degToRad(230));
	ctx.stroke();

//For UNITY
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.arc(150, 150, 80, degToRad(270), degToRad(100));
	ctx.stroke();
}

function setStandardArc() {
	var C = document.getElementById("otherCanvas");
	var ctx = C.getContext("2d");
	ctx.lineWidth = "20";
//For C
	ctx.strokeStyle = "#11FC00";
	ctx.beginPath();
	ctx.arc(150, 150, 120, degToRad(270), degToRad(100));
	ctx.stroke();

//For C++
	ctx.strokeStyle = "#ff7155";
	ctx.beginPath();
	ctx.arc(150, 150, 100, degToRad(270), degToRad(80));
	ctx.stroke();

//For C#
	ctx.strokeStyle = "#E4C08F";
	ctx.beginPath();
	ctx.arc(150, 150, 80, degToRad(270), degToRad(150));
	ctx.stroke();
}

setWebArc();
setMobileArc();
setStandardArc();
