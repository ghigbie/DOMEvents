//created in terminal

var button = document.querySelector("button");
var paragraph = document.querySelector("p");


button.addEventListener("click", function(){
	button.textContent = "Someone has clicked me!"
	paragraph.textContent = "Someone as clicked the button!"

	// button.addEventListener("click", function(){
	// 	button.textContent = "Someone has clicked me twice!"
	// 	paragraph.textContent = "Someone as clicked the button twice!"
	// });
});