alert("JS file connected!");

var blue = document.querySelector("#blue");
var orange = document.querySelector("#orange");
var purple = document.querySelector("#purple");
var body = document.querySelector("body");
var isColor = false;

blue.addEventListener("click", function(){
	colorChecker("#4286f4");
});

orange.addEventListener("click", function(){
	colorChecker("#f2a22b");
});

purple.addEventListener("click", function(){
	colorChecker("#462bf2");
});

function colorChecker(colorHexString){
	if(isColor){
		body.style.background = "#ffffff";
	}
	else{
		body.style.background = colorHexString;
	}
	isColor = !isColor; //switches between the two states
}
