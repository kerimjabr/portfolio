const menu = document.getElementById("menu");
const bas = document.getElementById("bas");

menu.addEventListener("click",() => {
	ElMenu();
});
function ElMenu() {
	
	menu.classList.toggle("is-bas");
	bas.classList.toggle("is-bas");
}