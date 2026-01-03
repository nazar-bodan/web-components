class WordCount extends HTMLElement {
	constructor() {
		super();

		// Attach shadow DOM to element
		this.attachShadow({ mode: "open" });

		// Create text element and add word count to it
		this.text = document.createElement("span");

		// Append it to shadow DOM
		this.shadowRoot.appendChild(this.text);
	}

	connectedCallback() {
		// Count words in element's parent node
		this.wcParent = this.parentNode;

		if (this.wcParent) {
			const count = `Words: ${this.countWords(this.wcParent)}`;
			this.text.textContent = count;

			// Store the listener so it can be removed
			this.onInput = () => {
				this.text.textContent = `Words: ${this.countWords(this.wcParent)}`;
			};

			// Update word count on input
			this.wcParent.addEventListener("input", this.onInput);
		}
	}

	disconnectedCallback() {
		if (this.wcParent) {
			this.wcParent.removeEventListener("input", this.onInput);
		}
	}

	countWords(node) {
		const text = node.innerText || node.textContent;
		return text.split(/\s+/g).filter((a) => a.trim().length > 0).length;
	}
}

customElements.define("word-count", WordCount);
