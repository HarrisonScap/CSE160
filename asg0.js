// asg0.js

/* Sources: 
 * https://developer.mozilla.org/en-US/
*/

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

function main() {

	if (!canvas) {
		console.log('Failed to retrieve the <canvas> element');
		return;
	}

	// Draws rectangle
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
	ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

}

function resetCanvas(){
	ctx.reset()
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
	ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color
}

function drawVector(vector,color){
	ctx.beginPath()
	ctx.moveTo(200,200);
	ctx.strokeStyle = color;
	ctx.lineTo(200+(vector.elements[0]*20),400-(200+vector.elements[1]*20));
	ctx.stroke();
	ctx.closePath()
}

function handleDrawEvent(){
	resetCanvas()
	let x1 = document.getElementById("x1").value;
	let y1 = document.getElementById("y1").value;

	let x2 = document.getElementById("x2").value;
	let y2 = document.getElementById("y2").value;

	var v1 = new Vector3([x1,y1,0])
	var v2 = new Vector3([x2,y2,0])

	drawVector(v1,"red");
	drawVector(v2,"blue");
}

function handleDrawOperationEvent(){
	resetCanvas()
	let x1 = document.getElementById("x1").value;
	let y1 = document.getElementById("y1").value;

	let x2 = document.getElementById("x2").value;
	let y2 = document.getElementById("y2").value;

	var v1 = new Vector3([x1,y1,0])
	var v2 = new Vector3([x2,y2,0])
	var v3;

	drawVector(v1,"red");
	drawVector(v2,"blue");

	var scalar = document.getElementById('scalar').value;
	var operation = document.getElementById('operation-select').value;
	
	switch(operation){
		case "add":
			v3 = v1.add(v2);
			break;
		case "sub":
			v3 = v1.sub(v2)
			break;
		case "mul":
			v3 = v1.mul(scalar)
			break;
		case "div":
			v3 = v1.div(scalar)
			break;
	}

	drawVector(v3,"green");


}
