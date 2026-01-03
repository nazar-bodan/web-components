class WordCount extends HTMLParagraphElement {
	constructor() {
		super();

		// Attach shadow DOM to element
		const shadow = this.attachShadow({ mode: "open" });

		// Create text element and add word count to it
		this.text = document.createElement("span");

		// Append it to shadow DOM
		shadow.appendChild(this.text);
	}

	connectedCallback() {
		// Count words in element's parent node
		const wcParent = this.parentNode;

		function countWords(node) {
			const text = node.innerText || node.textContent;
			return text.split(/\s+/g).filter((a) => a.trim().length > 0).length;
		}

		const count = `Words: ${countWords(wcParent)}`;
		this.text.textContent = count;

		// Update word count on input
		wcParent.addEventListener("input", () => {
			this.text.textContent = `Words: ${countWords(wcParent)}`;
		});
	}
}

customElements.define("word-count", WordCount, { extends: "p" });
