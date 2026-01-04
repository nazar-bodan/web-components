class Square extends HTMLElement {
	// Specify observed attributes so that attributeChangedCallback will work
	static get observedAttributes() {
		return ["size", "color"];
	}

	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		const div = document.createElement("div");
		const style = document.createElement("style");
		style.textContent = `
      div {
        width: var(--size);
        height: var(--size);
        background-color: var(--color);
      }
    `;

		shadow.appendChild(div);
		shadow.appendChild(style);
	}

	connectedCallback() {
		console.log("Custom square element added to page.");
		this.updateStyle();
	}

	disconnectedCallback() {
		console.log("Custom square element removed from page.");
	}

	adoptedCallback() {
		console.log("Custom square element moved to new page");
	}

	attributeChangedCallback(_name, oldValue, newValue) {
		if (oldValue === newValue) return;
		console.log("Custom square element attributes changed");
		this.updateStyle();
	}

	updateStyle() {
		const div = this.shadowRoot.querySelector("div");

		const size = this.getAttribute("size") || "100";
		const color = this.getAttribute("color") || "red";

		div.style.setProperty("--size", `${size}px`);
		div.style.setProperty("--color", color);
	}
}

customElements.define("custom-square", Square);

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
