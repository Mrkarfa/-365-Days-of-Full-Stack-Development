# HTML5 & CSS3 Comprehensive Cheat-Sheet

> A detailed reference guide for HTML5 and CSS3 with explanations and examples.

---

## Table of Contents

1. [HTML5 Basics](#html5-basics)
2. [HTML5 Document Structure](#html5-document-structure)
3. [HTML5 Semantic Elements](#html5-semantic-elements)
4. [HTML5 Text Elements](#html5-text-elements)
5. [HTML5 Lists](#html5-lists)
6. [HTML5 Links & Media](#html5-links--media)
7. [HTML5 Tables](#html5-tables)
8. [HTML5 Forms](#html5-forms)
9. [HTML5 New Input Types](#html5-new-input-types)
10. [HTML5 APIs & Features](#html5-apis--features)
11. [CSS3 Basics](#css3-basics)
12. [CSS3 Selectors](#css3-selectors)
13. [CSS3 Box Model](#css3-box-model)
14. [CSS3 Flexbox](#css3-flexbox)
15. [CSS3 Grid](#css3-grid)
16. [CSS3 Typography](#css3-typography)
17. [CSS3 Colors & Backgrounds](#css3-colors--backgrounds)
18. [CSS3 Transforms & Transitions](#css3-transforms--transitions)
19. [CSS3 Animations](#css3-animations)
20. [CSS3 Responsive Design](#css3-responsive-design)

---

## HTML5 Basics

### What is HTML5?

HTML5 is the fifth major revision of the Hypertext Markup Language. It introduces new semantic elements, APIs, and multimedia support, reducing the need for third-party plugins.

### Basic HTML5 Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Page description here" />
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Content goes here -->
    <script src="script.js"></script>
  </body>
</html>
```

**Key Points:**

- `<!DOCTYPE html>`: Declares HTML5 document type
- `<html lang="en">`: Root element with language attribute
- `<meta charset="UTF-8">`: Specifies character encoding
- `<meta name="viewport">`: Controls viewport for responsive design

---

## HTML5 Document Structure

### Essential Meta Tags

```html
<!-- Character Encoding -->
<meta charset="UTF-8" />

<!-- Viewport for Responsive Design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Page Description (SEO) -->
<meta name="description" content="Your page description" />

<!-- Author -->
<meta name="author" content="Author Name" />

<!-- Keywords (less important for SEO now) -->
<meta name="keywords" content="keyword1, keyword2" />

<!-- Robots -->
<meta name="robots" content="index, follow" />

<!-- Open Graph (Social Media) -->
<meta property="og:title" content="Title" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="image.jpg" />
```

---

## HTML5 Semantic Elements

Semantic elements clearly describe their meaning to both the browser and the developer.

### Layout Elements

| Element        | Description                         |
| -------------- | ----------------------------------- |
| `<header>`     | Introductory content, navigation    |
| `<nav>`        | Navigation links                    |
| `<main>`       | Main content (only one per page)    |
| `<article>`    | Self-contained, independent content |
| `<section>`    | Thematic grouping of content        |
| `<aside>`      | Sidebar, related content            |
| `<footer>`     | Footer information                  |
| `<figure>`     | Self-contained content like images  |
| `<figcaption>` | Caption for `<figure>`              |

### Example Structure

```html
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>Article Title</h1>
        <time datetime="2024-01-15">January 15, 2024</time>
      </header>
      <section>
        <p>Article content...</p>
      </section>
    </article>

    <aside>
      <h2>Related Links</h2>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 Company Name</p>
  </footer>
</body>
```

---

## HTML5 Text Elements

### Headings

```html
<h1>Main Heading (only one per page)</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Level 4</h4>
<h5>Level 5</h5>
<h6>Level 6</h6>
```

### Text Formatting

| Element        | Purpose                  | Example                                     |
| -------------- | ------------------------ | ------------------------------------------- |
| `<p>`          | Paragraph                | `<p>Text here</p>`                          |
| `<strong>`     | Important text (bold)    | `<strong>Important</strong>`                |
| `<em>`         | Emphasized text (italic) | `<em>Emphasized</em>`                       |
| `<mark>`       | Highlighted text         | `<mark>Highlighted</mark>`                  |
| `<small>`      | Smaller text             | `<small>Fine print</small>`                 |
| `<del>`        | Deleted text             | `<del>Removed</del>`                        |
| `<ins>`        | Inserted text            | `<ins>Added</ins>`                          |
| `<sub>`        | Subscript                | `H<sub>2</sub>O`                            |
| `<sup>`        | Superscript              | `x<sup>2</sup>`                             |
| `<code>`       | Code snippet             | `<code>let x = 5;</code>`                   |
| `<pre>`        | Preformatted text        | Preserves whitespace                        |
| `<blockquote>` | Block quotation          | `<blockquote cite="url">Quote</blockquote>` |
| `<q>`          | Inline quotation         | `<q>Short quote</q>`                        |
| `<abbr>`       | Abbreviation             | `<abbr title="Hypertext">HTML</abbr>`       |
| `<cite>`       | Citation                 | `<cite>Book Title</cite>`                   |
| `<time>`       | Date/Time                | `<time datetime="2024-01-15">Jan 15</time>` |

---

## HTML5 Lists

### Unordered List

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Ordered List

```html
<ol type="1" start="1">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

**Type values:** `1` (numbers), `A` (uppercase), `a` (lowercase), `I` (Roman), `i` (roman)

### Description List

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

---

## HTML5 Links & Media

### Links

```html
<!-- Basic Link -->
<a href="https://example.com">Visit Example</a>

<!-- Open in New Tab -->
<a href="url" target="_blank" rel="noopener noreferrer">External Link</a>

<!-- Email Link -->
<a href="mailto:email@example.com">Send Email</a>

<!-- Phone Link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Download Link -->
<a href="file.pdf" download>Download PDF</a>

<!-- Anchor Link -->
<a href="#section-id">Jump to Section</a>
```

### Images

```html
<!-- Basic Image -->
<img src="image.jpg" alt="Description" width="300" height="200" />

<!-- Responsive Image -->
<img
  src="small.jpg"
  srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
  sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
  alt="Responsive image"
/>

<!-- Picture Element (Art Direction) -->
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg" />
  <source media="(min-width: 400px)" srcset="medium.jpg" />
  <img src="small.jpg" alt="Description" />
</picture>
```

### Audio

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser doesn't support audio.
</audio>
```

**Attributes:** `controls`, `autoplay`, `loop`, `muted`, `preload`

### Video

```html
<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track src="captions.vtt" kind="subtitles" srclang="en" label="English" />
  Your browser doesn't support video.
</video>
```

### Iframe

```html
<iframe
  src="https://example.com"
  width="600"
  height="400"
  title="Iframe title"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
></iframe>
```

---

## HTML5 Tables

```html
<table>
  <caption>
    Table Title
  </caption>
  <thead>
    <tr>
      <th scope="col">Header 1</th>
      <th scope="col">Header 2</th>
      <th scope="col">Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td colspan="2">Spans 2 columns</td>
      <td rowspan="2">Spans 2 rows</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Data</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Footer content</td>
    </tr>
  </tfoot>
</table>
```

---

## HTML5 Forms

### Complete Form Example

```html
<form action="/submit" method="POST" enctype="multipart/form-data">
  <!-- Text Input -->
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required placeholder="Your name" />

  <!-- Email -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <!-- Password -->
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" />

  <!-- Textarea -->
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50"></textarea>

  <!-- Select Dropdown -->
  <label for="country">Country:</label>
  <select id="country" name="country">
    <optgroup label="North America">
      <option value="us">United States</option>
      <option value="ca">Canada</option>
    </optgroup>
    <optgroup label="Europe">
      <option value="uk">United Kingdom</option>
      <option value="de">Germany</option>
    </optgroup>
  </select>

  <!-- Radio Buttons -->
  <fieldset>
    <legend>Gender:</legend>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label>
  </fieldset>

  <!-- Checkboxes -->
  <fieldset>
    <legend>Interests:</legend>
    <input type="checkbox" id="coding" name="interests" value="coding" />
    <label for="coding">Coding</label>
    <input type="checkbox" id="design" name="interests" value="design" />
    <label for="design">Design</label>
  </fieldset>

  <!-- File Upload -->
  <label for="file">Upload File:</label>
  <input type="file" id="file" name="file" accept=".pdf,.doc,.docx" />

  <!-- Datalist -->
  <label for="browser">Browser:</label>
  <input list="browsers" id="browser" name="browser" />
  <datalist id="browsers">
    <option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Safari"></option>
  </datalist>

  <!-- Submit -->
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

### Common Input Attributes

| Attribute             | Description                 |
| --------------------- | --------------------------- |
| `required`            | Field must be filled        |
| `disabled`            | Field is disabled           |
| `readonly`            | Field is read-only          |
| `placeholder`         | Placeholder text            |
| `autofocus`           | Auto-focus on page load     |
| `autocomplete`        | Enable/disable autocomplete |
| `pattern`             | Regex pattern validation    |
| `minlength/maxlength` | Text length limits          |
| `min/max`             | Numeric range limits        |
| `step`                | Numeric step value          |
| `multiple`            | Allow multiple values       |

---

## HTML5 New Input Types

```html
<!-- Color Picker -->
<input type="color" value="#ff0000" />

<!-- Date -->
<input type="date" min="2024-01-01" max="2024-12-31" />

<!-- DateTime Local -->
<input type="datetime-local" />

<!-- Month -->
<input type="month" />

<!-- Week -->
<input type="week" />

<!-- Time -->
<input type="time" />

<!-- Number -->
<input type="number" min="0" max="100" step="5" />

<!-- Range (Slider) -->
<input type="range" min="0" max="100" value="50" />

<!-- Search -->
<input type="search" placeholder="Search..." />

<!-- Tel (Phone) -->
<input type="tel" pattern="[0-9]{10}" />

<!-- URL -->
<input type="url" placeholder="https://example.com" />
```

---

## HTML5 APIs & Features

### Local Storage

```javascript
// Store data
localStorage.setItem("key", "value");

// Retrieve data
const value = localStorage.getItem("key");

// Remove data
localStorage.removeItem("key");

// Clear all
localStorage.clear();
```

### Session Storage

```javascript
// Same API as localStorage, but data clears when session ends
sessionStorage.setItem("key", "value");
```

### Geolocation

```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    },
    (error) => {
      console.error(error);
    }
  );
}
```

### Drag and Drop Attributes

```html
<div draggable="true" ondragstart="handleDrag(event)">Drag me</div>
<div ondrop="handleDrop(event)" ondragover="allowDrop(event)">Drop here</div>
```

### Canvas

```html
<canvas id="myCanvas" width="400" height="300"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(50, 50, 100, 100);
</script>
```

### SVG (Inline)

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" stroke="black" stroke-width="2" />
  <rect x="10" y="10" width="30" height="30" fill="red" />
  <line x1="0" y1="0" x2="100" y2="100" stroke="green" />
</svg>
```

---

# CSS3 Cheat-Sheet

---

## CSS3 Basics

### What is CSS3?

CSS3 is the latest evolution of Cascading Style Sheets, introducing modules for layout (Flexbox, Grid), animations, transitions, and more.

### CSS Syntax

```css
selector {
  property: value;
  property: value;
}
```

### Ways to Include CSS

```html
<!-- 1. External (Recommended) -->
<link rel="stylesheet" href="styles.css" />

<!-- 2. Internal -->
<style>
  p {
    color: blue;
  }
</style>

<!-- 3. Inline (Avoid) -->
<p style="color: blue;">Text</p>
```

### CSS Comments

```css
/* This is a single-line comment */

/*
   This is a
   multi-line comment
*/
```

---

## CSS3 Selectors

### Basic Selectors

```css
/* Universal */
* {
  margin: 0;
}

/* Element/Type */
p {
  color: blue;
}

/* Class */
.classname {
  color: red;
}

/* ID */
#idname {
  color: green;
}

/* Grouping */
h1,
h2,
h3 {
  font-family: Arial;
}
```

### Combinator Selectors

```css
/* Descendant (any level) */
div p {
  color: blue;
}

/* Child (direct) */
div > p {
  color: red;
}

/* Adjacent Sibling (immediately after) */
h1 + p {
  margin-top: 0;
}

/* General Sibling (all after) */
h1 ~ p {
  color: gray;
}
```

### Attribute Selectors

```css
/* Has attribute */
[disabled] {
  opacity: 0.5;
}

/* Exact value */
[type="text"] {
  border: 1px solid;
}

/* Contains word */
[class~="btn"] {
  cursor: pointer;
}

/* Starts with */
[href^="https"] {
  color: green;
}

/* Ends with */
[src$=".png"] {
  border: none;
}

/* Contains */
[href*="example"] {
  color: blue;
}
```

### Pseudo-Classes

```css
/* Link States */
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
a:hover {
  color: red;
}
a:active {
  color: orange;
}
a:focus {
  outline: 2px solid;
}

/* Structural */
:first-child {
  font-weight: bold;
}
:last-child {
  margin-bottom: 0;
}
:nth-child(2) {
  background: yellow;
}
:nth-child(odd) {
  background: #f0f0f0;
}
:nth-child(even) {
  background: #fff;
}
:nth-child(3n) {
  border-bottom: 1px solid;
}
:nth-of-type(2) {
  color: red;
}
:only-child {
  text-align: center;
}

/* Form States */
:checked {
  background: green;
}
:disabled {
  opacity: 0.5;
}
:enabled {
  cursor: pointer;
}
:required {
  border-color: red;
}
:optional {
  border-color: gray;
}
:valid {
  border-color: green;
}
:invalid {
  border-color: red;
}
:focus {
  outline: 2px solid blue;
}
:focus-visible {
  outline: 2px dashed;
}

/* Other */
:empty {
  display: none;
}
:not(.class) {
  opacity: 0.7;
}
:root {
  --main-color: #333;
}
:target {
  background: yellow;
}
```

### Pseudo-Elements

```css
/* First letter/line */
p::first-letter {
  font-size: 2em;
}
p::first-line {
  font-weight: bold;
}

/* Before/After (generated content) */
.quote::before {
  content: '"';
}
.quote::after {
  content: '"';
}

/* Selection */
::selection {
  background: yellow;
  color: black;
}

/* Placeholder */
::placeholder {
  color: gray;
  font-style: italic;
}

/* Marker (list bullets) */
li::marker {
  color: red;
}
```

### Selector Specificity

**From lowest to highest:**

1. Universal `*` - (0,0,0,0)
2. Elements `div` - (0,0,0,1)
3. Classes `.class` - (0,0,1,0)
4. IDs `#id` - (0,1,0,0)
5. Inline styles - (1,0,0,0)
6. `!important` - Overrides all

---

## CSS3 Box Model

### Box Model Components

```
+------------------------------------------+
|              MARGIN                       |
|   +----------------------------------+   |
|   |           BORDER                 |   |
|   |   +--------------------------+   |   |
|   |   |        PADDING           |   |   |
|   |   |   +------------------+   |   |   |
|   |   |   |     CONTENT      |   |   |   |
|   |   |   +------------------+   |   |   |
|   |   +--------------------------+   |   |
|   +----------------------------------+   |
+------------------------------------------+
```

### Box-Sizing

```css
/* Default: width/height = content only */
.content-box {
  box-sizing: content-box;
}

/* Border-box: width/height includes padding & border */
.border-box {
  box-sizing: border-box;
}

/* Best Practice: Apply globally */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### Margin

```css
/* All sides */
margin: 20px;

/* Vertical | Horizontal */
margin: 10px 20px;

/* Top | Horizontal | Bottom */
margin: 10px 20px 30px;

/* Top | Right | Bottom | Left */
margin: 10px 20px 30px 40px;

/* Individual */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Auto (centering) */
margin: 0 auto;
```

### Padding

```css
/* Same shorthand as margin */
padding: 20px;
padding: 10px 20px;
padding-top: 10px;
/* etc. */
```

### Border

```css
/* Shorthand */
border: 1px solid black;

/* Individual properties */
border-width: 2px;
border-style: solid; /* dotted, dashed, double, groove, ridge, inset, outset */
border-color: #333;

/* Individual sides */
border-top: 2px dashed red;
border-right: 1px solid blue;
border-bottom: 3px double green;
border-left: none;

/* Border Radius */
border-radius: 10px;
border-radius: 10px 20px 30px 40px; /* TL TR BR BL */
border-radius: 50%; /* Circle */
border-top-left-radius: 10px;
```

### Outline

```css
/* Similar to border but doesn't take space */
outline: 2px solid blue;
outline-offset: 5px;
```

### Width & Height

```css
width: 100px;
height: 100px;

/* Percentage */
width: 50%;
height: 100vh;

/* Constraints */
min-width: 200px;
max-width: 1200px;
min-height: 100px;
max-height: 500px;

/* Auto */
width: auto;
height: auto;

/* Viewport Units */
width: 100vw; /* 100% viewport width */
height: 100vh; /* 100% viewport height */
width: 50vmin; /* 50% of smaller dimension */
height: 50vmax; /* 50% of larger dimension */
```

### Display

```css
display: block; /* Full width, new line */
display: inline; /* Inline, no width/height */
display: inline-block; /* Inline with width/height */
display: none; /* Hidden, no space */
display: flex; /* Flexbox container */
display: grid; /* Grid container */
display: contents; /* Remove container, keep children */
```

### Visibility & Opacity

```css
visibility: visible; /* Visible */
visibility: hidden; /* Hidden but takes space */

opacity: 1; /* Fully visible */
opacity: 0.5; /* 50% transparent */
opacity: 0; /* Fully transparent */
```

### Overflow

```css
overflow: visible; /* Default, content overflows */
overflow: hidden; /* Clip overflow */
overflow: scroll; /* Always show scrollbars */
overflow: auto; /* Scrollbars when needed */

/* Individual axes */
overflow-x: hidden;
overflow-y: auto;
```

---

## CSS3 Flexbox

### Container Properties

```css
.flex-container {
  display: flex; /* or inline-flex */

  /* Direction */
  flex-direction: row; /* Default, left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column; /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */

  /* Wrap */
  flex-wrap: nowrap; /* Default, single line */
  flex-wrap: wrap; /* Multiple lines */
  flex-wrap: wrap-reverse; /* Reverse order wrap */

  /* Shorthand */
  flex-flow: row wrap;

  /* Main Axis Alignment */
  justify-content: flex-start; /* Default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between; /* Equal space between */
  justify-content: space-around; /* Equal space around */
  justify-content: space-evenly; /* Equal space everywhere */

  /* Cross Axis Alignment */
  align-items: stretch; /* Default, fill container */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline; /* Align text baselines */

  /* Multi-line Alignment */
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch;

  /* Gap */
  gap: 20px; /* Both row and column */
  row-gap: 10px;
  column-gap: 20px;
}
```

### Item Properties

```css
.flex-item {
  /* Order (default: 0) */
  order: 1;

  /* Grow (default: 0) */
  flex-grow: 1; /* Item grows to fill space */

  /* Shrink (default: 1) */
  flex-shrink: 0; /* Item won't shrink */

  /* Basis (default: auto) */
  flex-basis: 200px; /* Initial size */

  /* Shorthand: grow shrink basis */
  flex: 1; /* flex: 1 1 0% */
  flex: 1 0 200px;
  flex: auto; /* flex: 1 1 auto */
  flex: none; /* flex: 0 0 auto */

  /* Individual alignment */
  align-self: auto;
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}
```

### Common Flexbox Patterns

```css
/* Center everything */
.center-all {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navbar with logo left, links right */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Equal columns */
.equal-columns {
  display: flex;
}
.equal-columns > * {
  flex: 1;
}

/* Sticky footer */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
```

---

## CSS3 Grid

### Container Properties

```css
.grid-container {
  display: grid; /* or inline-grid */

  /* Define Columns */
  grid-template-columns: 200px 200px 200px;
  grid-template-columns: 1fr 1fr 1fr; /* Equal fractions */
  grid-template-columns: repeat(3, 1fr); /* Repeat */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive */
  grid-template-columns: 200px 1fr 2fr; /* Mixed */

  /* Define Rows */
  grid-template-rows: 100px 200px;
  grid-template-rows: auto 1fr auto;

  /* Gap */
  gap: 20px;
  row-gap: 10px;
  column-gap: 20px;

  /* Named Areas */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";

  /* Implicit Grid (auto-created rows/columns) */
  grid-auto-rows: 100px;
  grid-auto-columns: 1fr;
  grid-auto-flow: row; /* Default */
  grid-auto-flow: column;
  grid-auto-flow: dense; /* Fill gaps */

  /* Alignment */
  justify-items: start; /* Align items horizontally */
  justify-items: end;
  justify-items: center;
  justify-items: stretch; /* Default */

  align-items: start; /* Align items vertically */
  align-items: end;
  align-items: center;
  align-items: stretch; /* Default */

  /* Align entire grid */
  justify-content: start;
  justify-content: center;
  justify-content: space-between;

  align-content: start;
  align-content: center;
  align-content: space-between;

  /* Shorthand */
  place-items: center; /* align-items justify-items */
  place-content: center center; /* align-content justify-content */
}
```

### Item Properties

```css
.grid-item {
  /* Position by line numbers */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  /* Shorthand */
  grid-column: 1 / 3; /* start / end */
  grid-row: 1 / 2;
  grid-column: 1 / span 2; /* Span 2 columns */
  grid-column: 1 / -1; /* First to last */

  /* Grid Area */
  grid-area: header; /* Named area */
  grid-area: 1 / 1 / 2 / 3; /* row-start/col-start/row-end/col-end */

  /* Individual alignment */
  justify-self: start;
  justify-self: center;
  justify-self: end;
  justify-self: stretch;

  align-self: start;
  align-self: center;
  align-self: end;
  align-self: stretch;

  place-self: center; /* Shorthand */
}
```

### Common Grid Patterns

```css
/* Holy Grail Layout */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.header {
  grid-area: header;
}
.nav {
  grid-area: nav;
}
.main {
  grid-area: main;
}
.aside {
  grid-area: aside;
}
.footer {
  grid-area: footer;
}

/* Responsive Card Grid */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
```

---

## CSS3 Typography

### Font Properties

```css
/* Font Family */
font-family: Arial, Helvetica, sans-serif;
font-family: "Times New Roman", Times, serif;
font-family: "Courier New", Courier, monospace;

/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
font-family: "Inter", sans-serif;

/* Font Size */
font-size: 16px;
font-size: 1rem; /* Relative to root */
font-size: 1.2em; /* Relative to parent */
font-size: clamp(1rem, 2vw, 2rem); /* Responsive */

/* Font Weight */
font-weight: normal; /* 400 */
font-weight: bold; /* 700 */
font-weight: 100; /* Thin */
font-weight: 900; /* Black */

/* Font Style */
font-style: normal;
font-style: italic;
font-style: oblique;

/* Font Variant */
font-variant: small-caps;

/* Shorthand */
font: italic bold 16px/1.5 Arial, sans-serif;
/* style weight size/line-height family */
```

### Text Properties

```css
/* Color */
color: #333;
color: rgb(51, 51, 51);
color: hsl(0, 0%, 20%);

/* Alignment */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;

/* Decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;
text-decoration: underline wavy red;

/* Transform */
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Spacing */
letter-spacing: 2px;
word-spacing: 5px;
line-height: 1.6;

/* Indent */
text-indent: 2em;

/* Shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
text-shadow: 1px 1px 0 white, 2px 2px 4px black;

/* Overflow */
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

/* Word Wrap */
word-wrap: break-word;
overflow-wrap: break-word;
hyphens: auto;
```

### Custom Fonts

```css
@font-face {
  font-family: "CustomFont";
  src: url("font.woff2") format("woff2"), url("font.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* Prevents invisible text */
}
```

---

## CSS3 Colors & Backgrounds

### Color Formats

```css
/* Named */
color: red;
color: transparent;

/* Hexadecimal */
color: #ff0000;
color: #f00; /* Shorthand */
color: #ff000080; /* With alpha */

/* RGB/RGBA */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);

/* HSL/HSLA (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);

/* Modern Syntax */
color: rgb(255 0 0 / 50%);
color: hsl(0 100% 50% / 50%);

/* Current Color */
border-color: currentColor;
```

### Background Properties

```css
/* Color */
background-color: #f0f0f0;

/* Image */
background-image: url("image.jpg");
background-image: url("image1.jpg"), url("image2.jpg"); /* Multiple */

/* Gradients */
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, red, yellow, green);
background: linear-gradient(to right, red 0%, blue 50%, green 100%);
background: radial-gradient(circle, red, blue);
background: radial-gradient(ellipse at top, red, blue);
background: conic-gradient(red, yellow, green, blue, red);

/* Position */
background-position: center;
background-position: top right;
background-position: 50% 50%;
background-position: 100px 200px;

/* Size */
background-size: cover; /* Fill, may crop */
background-size: contain; /* Fit, may have gaps */
background-size: 100px 200px;
background-size: 50% auto;

/* Repeat */
background-repeat: no-repeat;
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;

/* Attachment */
background-attachment: scroll; /* Default */
background-attachment: fixed; /* Parallax effect */
background-attachment: local; /* Scroll with content */

/* Origin & Clip */
background-origin: padding-box; /* Default */
background-origin: border-box;
background-origin: content-box;

background-clip: border-box; /* Default */
background-clip: padding-box;
background-clip: content-box;
background-clip: text; /* Text fill */

/* Shorthand */
background: url("image.jpg") no-repeat center/cover fixed;
```

### Box Shadow

```css
/* Syntax: x-offset y-offset blur spread color */
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* Inner shadow */

/* Multiple shadows */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
```

---

## CSS3 Transforms & Transitions

### Transform

```css
/* Translate (move) */
transform: translateX(50px);
transform: translateY(100px);
transform: translate(50px, 100px);
transform: translate3d(x, y, z);

/* Rotate */
transform: rotate(45deg);
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotate3d(x, y, z, angle);

/* Scale */
transform: scale(1.5); /* Both */
transform: scaleX(2);
transform: scaleY(0.5);
transform: scale(1.5, 0.5);

/* Skew */
transform: skew(10deg);
transform: skewX(10deg);
transform: skewY(10deg);

/* Multiple transforms */
transform: translateX(50px) rotate(45deg) scale(1.2);

/* Transform Origin */
transform-origin: center; /* Default */
transform-origin: top left;
transform-origin: 50% 50%;
transform-origin: 0 0;

/* 3D Transforms */
perspective: 1000px; /* On parent */
transform-style: preserve-3d; /* On parent */
backface-visibility: hidden; /* Hide back face */
```

### Transitions

```css
/* Individual properties */
transition-property: all;
transition-property: background-color, transform;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0.1s;

/* Shorthand */
transition: all 0.3s ease;
transition: background-color 0.3s ease, transform 0.5s ease-out;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Timing Functions */
transition-timing-function: ease; /* Default */
transition-timing-function: linear;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: steps(4);
transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Hover Effects

```css
/* Button Hover */
.button {
  background: #3498db;
  transition: all 0.3s ease;
}
.button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Card Hover */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Image Zoom */
.image-container {
  overflow: hidden;
}
.image-container img {
  transition: transform 0.5s ease;
}
.image-container:hover img {
  transform: scale(1.1);
}
```

---

## CSS3 Animations

### Keyframes

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
```

### Animation Properties

```css
/* Individual properties */
animation-name: slideIn;
animation-duration: 1s;
animation-timing-function: ease;
animation-delay: 0.5s;
animation-iteration-count: 1; /* number or infinite */
animation-direction: normal; /* normal, reverse, alternate */
animation-fill-mode: forwards; /* none, forwards, backwards, both */
animation-play-state: running; /* running, paused */

/* Shorthand */
animation: slideIn 1s ease 0.5s 1 normal forwards;
/* name duration timing delay count direction fill-mode */

/* Multiple animations */
animation: slideIn 1s ease, fadeIn 0.5s ease-out;
```

### Common Animations

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Spin */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Loading Dots */
@keyframes blink {
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

.loading-dot {
  animation: blink 1.4s infinite both;
}
.loading-dot:nth-child(2) {
  animation-delay: 0.2s;
}
.loading-dot:nth-child(3) {
  animation-delay: 0.4s;
}
```

---

## CSS3 Responsive Design

### Media Queries

```css
/* Min-width (Mobile First) */
@media (min-width: 576px) {
  /* Small */
}
@media (min-width: 768px) {
  /* Medium */
}
@media (min-width: 992px) {
  /* Large */
}
@media (min-width: 1200px) {
  /* Extra Large */
}

/* Max-width (Desktop First) */
@media (max-width: 1199px) {
  /* Below XL */
}
@media (max-width: 991px) {
  /* Below LG */
}
@media (max-width: 767px) {
  /* Below MD */
}
@media (max-width: 575px) {
  /* Below SM */
}

/* Combined */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Orientation */
@media (orientation: portrait) {
}
@media (orientation: landscape) {
}

/* Print */
@media print {
  .no-print {
    display: none;
  }
}

/* Hover capability */
@media (hover: hover) {
  .button:hover {
    background: blue;
  }
}

/* Prefers Color Scheme */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #fff;
  }
}

/* Prefers Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Container Queries

```css
/* Define container */
.container {
  container-type: inline-size;
  container-name: card;
}

/* Query container */
@container card (min-width: 400px) {
  .card-content {
    display: flex;
  }
}
```

### Responsive Units

```css
/* Viewport Units */
width: 100vw; /* 100% viewport width */
height: 100vh; /* 100% viewport height */
font-size: 5vw; /* 5% viewport width */
padding: 2vmin; /* 2% of smaller dimension */
margin: 2vmax; /* 2% of larger dimension */

/* Dynamic Viewport Units (mobile-friendly) */
height: 100dvh; /* Dynamic viewport height */
height: 100svh; /* Small viewport height */
height: 100lvh; /* Large viewport height */

/* Clamp for Responsive Typography */
font-size: clamp(1rem, 2.5vw, 2rem);
/* min, preferred, max */

/* Calc */
width: calc(100% - 200px);
padding: calc(1rem + 2vw);
```

### Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Object Fit */
.cover-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}
```

---

## CSS3 Position

### Position Values

```css
/* Static (default) */
position: static;

/* Relative (relative to normal position) */
position: relative;
top: 10px;
left: 20px;

/* Absolute (relative to positioned ancestor) */
position: absolute;
top: 0;
right: 0;

/* Fixed (relative to viewport) */
position: fixed;
bottom: 20px;
right: 20px;

/* Sticky (hybrid of relative & fixed) */
position: sticky;
top: 0; /* Sticks when scrolled to this position */

/* Z-Index (stacking order) */
z-index: 1;
z-index: 100;
z-index: -1;
```

### Common Position Patterns

```css
/* Centering with Position */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Full-screen Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* Sticky Header */
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}
```

---

## CSS Variables (Custom Properties)

```css
/* Define variables */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
  --spacing-unit: 8px;
  --border-radius: 4px;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Use variables */
.button {
  background: var(--primary-color);
  font-size: var(--font-size-base);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

/* Fallback value */
color: var(--undefined-color, black);

/* Override in scope */
.dark-theme {
  --primary-color: #2980b9;
  --bg-color: #1a1a1a;
}
```

---

## CSS Filters & Effects

```css
/* Filter */
filter: blur(5px);
filter: brightness(1.2);
filter: contrast(1.5);
filter: grayscale(100%);
filter: hue-rotate(90deg);
filter: invert(100%);
filter: opacity(50%);
filter: saturate(2);
filter: sepia(100%);
filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));

/* Multiple filters */
filter: brightness(1.1) contrast(1.2) saturate(1.3);

/* Backdrop Filter (blur behind element) */
backdrop-filter: blur(10px);
backdrop-filter: blur(10px) saturate(180%);

/* Mix Blend Mode */
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: difference;
```

---

## Quick Reference Cards

### Flexbox Cheat

```
Container:           Items:
display: flex        order: <number>
flex-direction       flex-grow: <number>
flex-wrap           flex-shrink: <number>
justify-content     flex-basis: <size>
align-items         align-self
align-content       flex: grow shrink basis
gap
```

### Grid Cheat

```
Container:                    Items:
display: grid                 grid-column: start / end
grid-template-columns         grid-row: start / end
grid-template-rows           grid-area: name
grid-template-areas          justify-self
gap                          align-self
justify-items
align-items
```

### Common Breakpoints

```css
/* Mobile First */
/* Default: Mobile (< 576px) */
@media (min-width: 576px) {
  /* Landscape phones */
}
@media (min-width: 768px) {
  /* Tablets */
}
@media (min-width: 992px) {
  /* Desktops */
}
@media (min-width: 1200px) {
  /* Large desktops */
}
@media (min-width: 1400px) {
  /* Extra large */
}
```

---

> **Happy Coding! 🎉**
>
> This cheat-sheet covers the most essential HTML5 and CSS3 features. For more in-depth information, refer to [MDN Web Docs](https://developer.mozilla.org/).
