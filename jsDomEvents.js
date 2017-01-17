//created in terminal

var button = document.querySelector("button");
var paragraph = document.querySelector("p");
button.addEventListener("click", function(){
	button.textContent = "Someone has clicked me!"
	paragraph.textContent = "Someone as clicked the button!"
});