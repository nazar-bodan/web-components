import "./Square.js";

const add = document.querySelector(".add");
const update = document.querySelector(".update");
const remove = document.querySelector(".remove");
let square;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = () => {
	// Create a custom square element
	square = document.createElement("custom-square");
	square.setAttribute("size", 100);
	square.setAttribute("color", "red");
	document.body.appendChild(square);

	update.disabled = false;
	remove.disabled = false;
	add.disabled = true;
};

update.onclick = () => {
	// Randomly update square's attributes
	square.setAttribute("size", random(50, 200));
	square.setAttribute(
		"color",
		`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
	);
};

remove.onclick = () => {
	// Remove the square
	document.body.removeChild(square);

	update.disabled = true;
	remove.disabled = true;
	add.disabled = false;
};
