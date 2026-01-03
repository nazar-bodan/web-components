# Web Components

A collection of vanilla JavaScript Web Components.

## Components

### Word Count (`<word-count>`)

An autonomous custom element that counts the words in its parent container and displays the count.

**Features:**
- Real-time updates on input.
- Shadow DOM encapsulation.
- No dependencies.

**Usage:**

```html
<article contenteditable="true">
  <p>Start typing here...</p>
  <<!-- The component will count words in the <article> -->
  <word-count></word-count>
</article>

<script src="path/to/main.js"></script>
```

**Implementation Details:**
- Extends `HTMLElement`.
- Uses `connectedCallback` for DOM attachment safety.
- Cleans up event listeners in `disconnectedCallback`.
