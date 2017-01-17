var blue = document.querySelector("#blue");
var orange = document.querySelector("#orange");
var purple = document.querySelector("#purple");
var body = document.querySelector("body");

blue.addEventListener("click", function(){
	body.classList.add("blue");
});

orange.addEventListener("click", function(){
	body.classList.add("orange");
});

purple.addEventListener("click", fucntion(){
	body.classList.add("purple");
});