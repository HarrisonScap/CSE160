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


function angleBetween(vector1,vector2){
	// I implemented this exact function in a godot project 
	var theta = Math.acos((Vector3.dot(vector1,vector2))/(vector1.magnitude()*vector2.magnitude())) // This is in radians
	return theta * (180/Math.PI) // Converted to degrees
}

function areaTriangle(vector1,vector2){
	return (Vector3.cross(vector1,vector2)).magnitude()/2
	
}

function handleDrawOperationEvent(){
	resetCanvas()
	let x1 = document.getElementById("x1").value;
	let y1 = document.getElementById("y1").value;

	let x2 = document.getElementById("x2").value;
	let y2 = document.getElementById("y2").value;

	var v1 = new Vector3([x1,y1,0]);
	var v2 = new Vector3([x2,y2,0]);
	var v3 = new Vector3([0,0,0]);
	var v4 = new Vector3([0,0,0]);

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
			v4 = v2.mul(scalar)
			break;
		case "div":
			v3 = v1.div(scalar)
			v4 = v2.div(scalar)
			break;
		case "mag":
			console.log("Magnitude v1: " + v1.magnitude())
			console.log("Magnitude v2: " + v2.magnitude())
			break;
		case "nor":
			v3 = v1.normalize()
			v4 = v2.normalize()
			break;
		case "ang":
			console.log("Angle: " + angleBetween(v1,v2))
			break;
		case "tri":
			console.log("Area: " + areaTriangle(v1,v2))
			break;
	}

	drawVector(v3,"green");
	drawVector(v4,"green");


}
