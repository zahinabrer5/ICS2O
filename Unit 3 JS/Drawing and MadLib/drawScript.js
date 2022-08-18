var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// draw in background change the color using RGB
ctx.fillStyle = "rgb(69, 140, 255)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// The fillRect(x, y, width, height) method draws a rectangle, filled with the fill style, on the canvas
// change the width and height to fill in the background 
// ctx.fillStyle = "yellow";
// ctx.fillRect(0, 0, 100, 100);

// sun
ctx.beginPath();
ctx.arc(0, 0, 100, 0, 2*Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
// ctx.stroke();

// Write on the screen
// Change to font and colour of choice
ctx.fillStyle = "red";
ctx.font = "35px Comic Neue";
ctx.textAlign = "center";
ctx.fillText("Summer World!", 250, 50);

/*
What happens if you moved lines 13-15 above line 7?
The text goes under the rectangle
*/

// add in ground
// use fillRect(x, y, width,height)
ctx.fillStyle = "#0F0";
ctx.fillRect(0, 460, 500, 40);

// draw a circle
// use arc(x, y, r, start angle, end angle)
ctx.fillStyle = "#FFF";
ctx.beginPath();
ctx.arc(300, 420, 50, 0, 2 * Math.PI);
ctx.stroke();  // try taking this out - what happens?
// after taking it out, the snowball disappears
ctx.fill();

// snowman arms
ctx.beginPath();
ctx.moveTo(330, 340);
ctx.lineTo(370, 320);
ctx.moveTo(270, 340);
ctx.lineTo(235, 320);
ctx.lineWidth = 3;
const brown = '#7a4315';
ctx.strokeStyle = brown;
ctx.stroke();

// add in the other two snowballs to make a snowman

ctx.beginPath();  // try taking this out ... what happens?
// after taking it out, a line shoots out of one of the snowballs and connects to the other one
ctx.arc(300, 350, 35, 0, 2 * Math.PI);
ctx.lineWidth = 1;
ctx.strokeStyle = '#000'
ctx.stroke();
ctx.fill();

ctx.beginPath();  // try taking this out ... what happens?
ctx.arc(300, 300, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// tree
ctx.fillStyle = brown;
ctx.fillRect(80,200,50,260);
ctx.fillStyle = "green";
ctx.fillRect(30,150,150,150);

// funny caption haha xd lol
ctx.fillStyle = "yellow";
ctx.font = "20px Comic Neue";
ctx.textAlign = "center";
ctx.fillText("What's a snowman", 400, 210);
ctx.fillText("doing in summer?!", 400, 230);

// Finish a scene of choice using a variety of canvas commands
// https://www.w3schools.com/graphics/canvas_reference.asp
