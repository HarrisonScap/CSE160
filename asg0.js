// DrawRectangle.js
function main() {
	// Retrieve <canvas> element <- (1)
	var canvas = document.getElementById('canvas1');
	if (!canvas) {
		console.log('Failed to retrieve the <canvas> element');
		return;
	}
	// Get the rendering context for 2DCG <- (2)
	var ctx = canvas.getContext('2d');

	// Draw a blue rectangle <- (3)
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
	ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
}

function handleDrawEvent(){
	let v1 = document.getElementById("x").value;
	let v2 = document.getElementById("y").value;
	console.log(v1)
	console.log(v2)
}
