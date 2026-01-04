import "./Square.js";

const add = document.querySelector(".add");
const update = document.querySelector(".update");
const remove = document.querySelector(".remove");

update.disabled = true;
remove.disabled = true;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

add.addEventListener("click", () => {
	// Create a custom square element
	const square = document.createElement("custom-square");
	square.setAttribute("size", 100);
	square.setAttribute("color", "red");
	document.body.appendChild(square);

	update.disabled = false;
	remove.disabled = false;
	add.disabled = true;
});

update.addEventListener("click", () => {
	// Randomly update square's attributes
	const square = document.querySelector("custom-square");
	if (square) {
		square.setAttribute("size", random(50, 200));
		square.setAttribute(
			"color",
			`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
		);
	}
});

remove.addEventListener("click", () => {
	// Remove the square
	const square = document.querySelector("custom-square");
	if (square) {
		document.body.removeChild(square);
	}

	update.disabled = true;
	remove.disabled = true;
	add.disabled = false;
});
