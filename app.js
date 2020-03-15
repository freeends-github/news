const search = document.querySelector('.search_container i');
const input = document.querySelector('.search_container input');

search.addEventListener("click",function(){
	search.classList.toggle("go");
	input.classList.toggle("show");
	input.value = "";
});

const list = document.querySelector('.second_list ul');
const hamburger = document.querySelector('.second_list i');

hamburger.addEventListener("click",function(){
	// list.style.display = 'block';
	list.classList.toggle("showlist");
	console.log("mire o o shoqi");
});