

var button = document.querySelector("button");
var paragraph = document.querySelector("p");


// button.addEventListener("click", function(){
// 	button.textContent = "Someone has clicked me!";
// 	paragraph.textContent = "Someone as clicked the button!";

// 	// button.addEventListener("click", function(){
// 	// 	button.textContent = "Someone has clicked me twice!"
// 	// 	paragraph.textContent = "Someone as clicked the button twice!"
// 	// });
// });

var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
	alert("h1 was clicked");
	h1.style.color="purple";
	h1.style.background ="orange";
});

var ul = document.querySelector("ul");
ul.addEventListener("click", fucntion(){
	console.log("You clicked the ul!")
});

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink"
	})
}