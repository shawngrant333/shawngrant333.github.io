var canvases = document.getElementsByClassName("Skill");

for (var i = 0; i < canvases.length; i++){
	var canvas = canvases[i];
	var name = canvas.className.split(' ')[1];
	var color = canvas.className.split(' ')[2];

	var ctx = canvas.getContext("2d");
	ctx.font = "20px arial";
	ctx.fillText(name,5,25);

	ctx.fillStyle = "#33ccff";
	ctx.fillRect(canvas.width - 20,0,20,30);
}
