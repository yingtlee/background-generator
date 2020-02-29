var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateRandomInt(){
	return Math.floor(Math.random() * Math.floor(255));
}

function RGBToHex(r,g,b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
  
	if (r.length == 1)
	  r = "0" + r;
	if (g.length == 1)
	  g = "0" + g;
	if (b.length == 1)
	  b = "0" + b;
  
	return "#" + r + g + b;
  }

function setRandomColor(){
	var hex1 = RGBToHex(generateRandomInt(), generateRandomInt(), generateRandomInt());
	var hex2 = RGBToHex(generateRandomInt(), generateRandomInt(), generateRandomInt());
	color1.value = hex1;
	color2.value = hex2;
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function(){
	setRandomColor();
});

