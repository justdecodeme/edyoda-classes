let bgEl = document.getElementById("bg");
let hexString = "0123456789abcdef";

let randomColor = () => {
	let hexCode = "#";
	for (i = 0; i < 6; i++) {
		hexCode += hexString[Math.floor(Math.random() * hexString.length)];
	}
	return hexCode;
};

let generateGrad = () => {
	let colorOne = randomColor();
	let colorTwo = randomColor();
	// let angle = Math.floor(Math.random() * 360);
	// bgEl.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
	bgEl.style.background = `linear-gradient(${colorOne}, ${colorTwo})`;
};

window.onload = generateGrad;
