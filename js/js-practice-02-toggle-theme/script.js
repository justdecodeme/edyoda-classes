// IMPORTANT
// Write and practice this code 3-5 times ATLEAST
// IMPORTANT

// variables
var btn = document.getElementById("btn");
var activeTheme = "light";

// function definition
function toggleTheme() {
	if (activeTheme == "dark") {
		document.body.style.backgroundColor = "white";
		document.body.style.color = "grey";
		btn.innerText = "Switch to Dark Theme";
		activeTheme = "light";
	} else {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
		btn.innerText = "Switch to Light Theme";
		activeTheme = "dark";
	}
}

// event listener
btn.addEventListener("click", toggleTheme);
