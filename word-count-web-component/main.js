class WordCount extends HTMLParagraphElement {
	constructor() {
		super();

		// Count words in element's parent node
		const wcParent = this.parentNode;

		function countWords(node) {
			const text = node.innerText || node.textContent;
			return text.split(/\s+/g).filter((a) => a.trim().length > 0).length;
		}

		const count = `Words: ${countWords(wcParent)}`;

		// Attach shadow DOM to element
		const shadow = this.attachShadow({ mode: "open" });

		// Create text element and add word count to it
		const text = document.createElement("span");
		text.textContent = count;

		// Append it to shadow DOM
		shadow.appendChild(text);

		// Update word count on input
		this.parentNode.addEventListener("input", () => {
			text.textContent = `Words: ${countWords(wcParent)}`;
		});
	}
}

customElements.define("word-count", WordCount, { extends: "p" });
