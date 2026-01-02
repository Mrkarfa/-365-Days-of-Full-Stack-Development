# Tailwind CSS Comprehensive Cheat-Sheet

> A utility-first CSS framework for rapidly building custom user interfaces.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Core Concepts](#core-concepts)
3. [Layout](#layout)
4. [Flexbox](#flexbox)
5. [Grid](#grid)
6. [Spacing](#spacing)
7. [Sizing](#sizing)
8. [Typography](#typography)
9. [Colors & Backgrounds](#colors--backgrounds)
10. [Borders](#borders)
11. [Effects & Filters](#effects--filters)
12. [Transitions & Animations](#transitions--animations)
13. [Transforms](#transforms)
14. [Interactivity](#interactivity)
15. [Responsive Design](#responsive-design)
16. [Dark Mode](#dark-mode)
17. [Custom Configuration](#custom-configuration)

---

## Getting Started

### What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework** that provides low-level utility classes to build custom designs directly in your HTML. Unlike traditional CSS frameworks (like Bootstrap), Tailwind doesn't provide pre-designed components—instead, it gives you building blocks.

### Installation Methods

#### 1. CDN (Quick Start - Development Only)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tailwind CSS</title>
    <!-- Add Tailwind via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
  </body>
</html>
```

#### 2. npm Installation (Production)

```bash
# Install Tailwind CSS
npm install -D tailwindcss

# Generate config file
npx tailwindcss init

# Build CSS
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

**tailwind.config.js:**

```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**input.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 3. With Vite

```bash
npm create vite@latest my-project
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Core Concepts

### Utility-First Approach

Instead of writing custom CSS, you apply pre-existing utility classes directly in HTML:

```html
<!-- Traditional CSS approach -->
<div class="card">Card content</div>

<!-- Tailwind utility-first approach -->
<div class="bg-white rounded-lg shadow-lg p-6 max-w-sm">Card content</div>
```

### Class Naming Convention

Tailwind uses a consistent naming pattern:

```
{property}-{value}
{property}-{direction}-{value}
{breakpoint}:{property}-{value}
{state}:{property}-{value}
```

**Examples:**

- `text-center` → text-align: center
- `mt-4` → margin-top: 1rem
- `md:flex` → display: flex (at medium breakpoint)
- `hover:bg-blue-500` → background-color on hover

### Default Spacing Scale

| Class | Value    | Pixels |
| ----- | -------- | ------ |
| 0     | 0        | 0px    |
| px    | 1px      | 1px    |
| 0.5   | 0.125rem | 2px    |
| 1     | 0.25rem  | 4px    |
| 2     | 0.5rem   | 8px    |
| 3     | 0.75rem  | 12px   |
| 4     | 1rem     | 16px   |
| 5     | 1.25rem  | 20px   |
| 6     | 1.5rem   | 24px   |
| 8     | 2rem     | 32px   |
| 10    | 2.5rem   | 40px   |
| 12    | 3rem     | 48px   |
| 16    | 4rem     | 64px   |
| 20    | 5rem     | 80px   |
| 24    | 6rem     | 96px   |
| 32    | 8rem     | 128px  |
| 40    | 10rem    | 160px  |
| 48    | 12rem    | 192px  |
| 56    | 14rem    | 224px  |
| 64    | 16rem    | 256px  |

---

## Layout

### Display

```html
<!-- Block -->
<div class="block">Block element</div>

<!-- Inline Block -->
<span class="inline-block">Inline block</span>

<!-- Inline -->
<span class="inline">Inline element</span>

<!-- Flex -->
<div class="flex">Flex container</div>

<!-- Inline Flex -->
<div class="inline-flex">Inline flex</div>

<!-- Grid -->
<div class="grid">Grid container</div>

<!-- Hidden -->
<div class="hidden">Hidden element</div>

<!-- Contents (removes container, keeps children) -->
<div class="contents">Contents</div>
```

### Container

```html
<!-- Centered container with responsive max-width -->
<div class="container mx-auto px-4">Content here</div>
```

| Breakpoint   | Container Width |
| ------------ | --------------- |
| None         | 100%            |
| sm (640px)   | 640px           |
| md (768px)   | 768px           |
| lg (1024px)  | 1024px          |
| xl (1280px)  | 1280px          |
| 2xl (1536px) | 1536px          |

### Position

```html
<div class="static">Static (default)</div>
<div class="relative">Relative positioning</div>
<div class="absolute">Absolute positioning</div>
<div class="fixed">Fixed positioning</div>
<div class="sticky top-0">Sticky positioning</div>
```

### Top / Right / Bottom / Left

```html
<!-- Inset (all sides) -->
<div class="absolute inset-0">Full overlay</div>
<div class="absolute inset-x-0">Left and right 0</div>
<div class="absolute inset-y-0">Top and bottom 0</div>

<!-- Individual sides -->
<div class="absolute top-0 right-0">Top right corner</div>
<div class="absolute bottom-4 left-4">Bottom left with spacing</div>

<!-- Common patterns -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Centered
</div>
```

### Z-Index

```html
<div class="z-0">z-index: 0</div>
<div class="z-10">z-index: 10</div>
<div class="z-20">z-index: 20</div>
<div class="z-30">z-index: 30</div>
<div class="z-40">z-index: 40</div>
<div class="z-50">z-index: 50</div>
<div class="z-auto">z-index: auto</div>
<div class="-z-10">z-index: -10</div>
```

### Overflow

```html
<div class="overflow-auto">Auto scrollbars</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-visible">Visible overflow</div>
<div class="overflow-scroll">Always scroll</div>
<div class="overflow-x-auto">Horizontal scroll</div>
<div class="overflow-y-hidden">Hide vertical overflow</div>
```

---

## Flexbox

### Flex Container

```html
<!-- Basic flex container -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Inline flex -->
<div class="inline-flex">Inline flex</div>
```

### Flex Direction

```html
<div class="flex flex-row">Left to right (default)</div>
<div class="flex flex-row-reverse">Right to left</div>
<div class="flex flex-col">Top to bottom</div>
<div class="flex flex-col-reverse">Bottom to top</div>
```

### Flex Wrap

```html
<div class="flex flex-wrap">Wrap items</div>
<div class="flex flex-nowrap">No wrapping (default)</div>
<div class="flex flex-wrap-reverse">Wrap in reverse</div>
```

### Justify Content (Main Axis)

```html
<div class="flex justify-start">Items at start</div>
<div class="flex justify-end">Items at end</div>
<div class="flex justify-center">Items centered</div>
<div class="flex justify-between">Space between items</div>
<div class="flex justify-around">Space around items</div>
<div class="flex justify-evenly">Space evenly distributed</div>
```

### Align Items (Cross Axis)

```html
<div class="flex items-start">Align to top</div>
<div class="flex items-end">Align to bottom</div>
<div class="flex items-center">Align to center</div>
<div class="flex items-baseline">Align to baseline</div>
<div class="flex items-stretch">Stretch to fill (default)</div>
```

### Align Content (Multi-line)

```html
<div class="flex flex-wrap content-start">Lines at start</div>
<div class="flex flex-wrap content-end">Lines at end</div>
<div class="flex flex-wrap content-center">Lines centered</div>
<div class="flex flex-wrap content-between">Space between lines</div>
<div class="flex flex-wrap content-around">Space around lines</div>
<div class="flex flex-wrap content-evenly">Space evenly</div>
```

### Gap

```html
<div class="flex gap-4">Gap on all sides</div>
<div class="flex gap-x-4">Horizontal gap only</div>
<div class="flex gap-y-2">Vertical gap only</div>
```

### Flex Item Properties

```html
<!-- Flex Grow -->
<div class="flex-grow">Grow to fill space</div>
<div class="flex-grow-0">Don't grow</div>

<!-- Flex Shrink -->
<div class="flex-shrink">Can shrink</div>
<div class="flex-shrink-0">Don't shrink</div>

<!-- Flex Basis -->
<div class="basis-0">basis: 0</div>
<div class="basis-1/2">basis: 50%</div>
<div class="basis-full">basis: 100%</div>
<div class="basis-auto">basis: auto</div>

<!-- Flex Shorthand -->
<div class="flex-1">flex: 1 1 0%</div>
<div class="flex-auto">flex: 1 1 auto</div>
<div class="flex-initial">flex: 0 1 auto</div>
<div class="flex-none">flex: none</div>

<!-- Align Self -->
<div class="self-auto">Auto alignment</div>
<div class="self-start">Align to start</div>
<div class="self-end">Align to end</div>
<div class="self-center">Align to center</div>
<div class="self-stretch">Stretch</div>

<!-- Order -->
<div class="order-first">-9999</div>
<div class="order-last">9999</div>
<div class="order-none">0</div>
<div class="order-1">1</div>
```

### Common Flexbox Patterns

```html
<!-- Center everything -->
<div class="flex items-center justify-center min-h-screen">
  Perfectly centered content
</div>

<!-- Navbar -->
<nav class="flex items-center justify-between p-4">
  <div class="logo">Logo</div>
  <div class="flex gap-4">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </div>
</nav>

<!-- Equal columns -->
<div class="flex">
  <div class="flex-1">Column 1</div>
  <div class="flex-1">Column 2</div>
  <div class="flex-1">Column 3</div>
</div>

<!-- Sidebar layout -->
<div class="flex min-h-screen">
  <aside class="w-64 bg-gray-800">Sidebar</aside>
  <main class="flex-1">Main content</main>
</div>

<!-- Sticky footer -->
<div class="flex flex-col min-h-screen">
  <header>Header</header>
  <main class="flex-1">Content</main>
  <footer>Footer</footer>
</div>
```

---

## Grid

### Grid Container

```html
<!-- Basic grid -->
<div class="grid">Grid container</div>

<!-- Inline grid -->
<div class="inline-grid">Inline grid</div>
```

### Grid Template Columns

```html
<!-- Fixed columns -->
<div class="grid grid-cols-1">1 column</div>
<div class="grid grid-cols-2">2 columns</div>
<div class="grid grid-cols-3">3 columns</div>
<div class="grid grid-cols-4">4 columns</div>
<div class="grid grid-cols-6">6 columns</div>
<div class="grid grid-cols-12">12 columns</div>

<!-- Auto columns -->
<div class="grid grid-cols-none">No columns defined</div>

<!-- Subgrid (CSS subgrid) -->
<div class="grid grid-cols-subgrid">Subgrid</div>
```

### Grid Template Rows

```html
<div class="grid grid-rows-1">1 row</div>
<div class="grid grid-rows-2">2 rows</div>
<div class="grid grid-rows-3">3 rows</div>
<div class="grid grid-rows-6">6 rows</div>
```

### Grid Column Span

```html
<div class="col-span-1">Span 1 column</div>
<div class="col-span-2">Span 2 columns</div>
<div class="col-span-3">Span 3 columns</div>
<div class="col-span-full">Span all columns</div>

<!-- Start and end -->
<div class="col-start-1">Start at column 1</div>
<div class="col-start-2 col-end-4">From column 2 to 4</div>
<div class="col-end-auto">End auto</div>
```

### Grid Row Span

```html
<div class="row-span-1">Span 1 row</div>
<div class="row-span-2">Span 2 rows</div>
<div class="row-span-3">Span 3 rows</div>
<div class="row-span-full">Span all rows</div>

<!-- Start and end -->
<div class="row-start-1">Start at row 1</div>
<div class="row-start-2 row-end-4">From row 2 to 4</div>
```

### Grid Flow

```html
<div class="grid grid-flow-row">Fill rows first (default)</div>
<div class="grid grid-flow-col">Fill columns first</div>
<div class="grid grid-flow-dense">Dense packing</div>
<div class="grid grid-flow-row-dense">Row dense</div>
<div class="grid grid-flow-col-dense">Column dense</div>
```

### Grid Auto Columns/Rows

```html
<!-- Auto columns -->
<div class="grid auto-cols-auto">auto</div>
<div class="grid auto-cols-min">min-content</div>
<div class="grid auto-cols-max">max-content</div>
<div class="grid auto-cols-fr">1fr</div>

<!-- Auto rows -->
<div class="grid auto-rows-auto">auto</div>
<div class="grid auto-rows-min">min-content</div>
<div class="grid auto-rows-max">max-content</div>
<div class="grid auto-rows-fr">1fr</div>
```

### Grid Gap

```html
<div class="grid gap-4">Gap on all sides</div>
<div class="grid gap-x-4">Horizontal gap</div>
<div class="grid gap-y-2">Vertical gap</div>
```

### Grid Alignment

```html
<!-- Justify Items (horizontal alignment) -->
<div class="grid justify-items-start">Align left</div>
<div class="grid justify-items-end">Align right</div>
<div class="grid justify-items-center">Center</div>
<div class="grid justify-items-stretch">Stretch (default)</div>

<!-- Align Items (vertical alignment) -->
<div class="grid items-start">Align top</div>
<div class="grid items-end">Align bottom</div>
<div class="grid items-center">Center</div>
<div class="grid items-stretch">Stretch</div>

<!-- Place Items (both) -->
<div class="grid place-items-center">Center both</div>

<!-- Justify Content (whole grid) -->
<div class="grid justify-start">Grid at start</div>
<div class="grid justify-center">Grid centered</div>
<div class="grid justify-between">Space between</div>

<!-- Align Content (whole grid) -->
<div class="grid content-start">Content at start</div>
<div class="grid content-center">Content centered</div>

<!-- Place Content -->
<div class="grid place-content-center">Center everything</div>
```

### Common Grid Patterns

```html
<!-- Responsive card grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-4 rounded shadow">Card 1</div>
  <div class="bg-white p-4 rounded shadow">Card 2</div>
  <div class="bg-white p-4 rounded shadow">Card 3</div>
</div>

<!-- Holy grail layout -->
<div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
  <header class="bg-gray-800 text-white p-4">Header</header>
  <div class="grid grid-cols-[200px_1fr_200px]">
    <aside class="bg-gray-200 p-4">Sidebar</aside>
    <main class="p-4">Main content</main>
    <aside class="bg-gray-200 p-4">Right sidebar</aside>
  </div>
  <footer class="bg-gray-800 text-white p-4">Footer</footer>
</div>

<!-- Dashboard layout -->
<div class="grid grid-cols-4 grid-rows-3 gap-4 h-screen p-4">
  <div class="col-span-4 bg-blue-500 rounded">Header</div>
  <div class="row-span-2 bg-gray-500 rounded">Sidebar</div>
  <div class="col-span-3 bg-green-500 rounded">Main</div>
  <div class="bg-yellow-500 rounded">Widget 1</div>
  <div class="bg-red-500 rounded">Widget 2</div>
  <div class="bg-purple-500 rounded">Widget 3</div>
</div>
```

---

## Spacing

### Padding

```html
<!-- All sides -->
<div class="p-0">padding: 0</div>
<div class="p-4">padding: 1rem</div>
<div class="p-8">padding: 2rem</div>

<!-- Horizontal & Vertical -->
<div class="px-4">padding-left/right: 1rem</div>
<div class="py-4">padding-top/bottom: 1rem</div>

<!-- Individual sides -->
<div class="pt-4">padding-top: 1rem</div>
<div class="pr-4">padding-right: 1rem</div>
<div class="pb-4">padding-bottom: 1rem</div>
<div class="pl-4">padding-left: 1rem</div>

<!-- Logical properties -->
<div class="ps-4">padding-inline-start</div>
<div class="pe-4">padding-inline-end</div>
```

### Margin

```html
<!-- All sides -->
<div class="m-0">margin: 0</div>
<div class="m-4">margin: 1rem</div>
<div class="m-auto">margin: auto</div>

<!-- Horizontal & Vertical -->
<div class="mx-4">margin-left/right: 1rem</div>
<div class="my-4">margin-top/bottom: 1rem</div>
<div class="mx-auto">Center horizontally</div>

<!-- Individual sides -->
<div class="mt-4">margin-top: 1rem</div>
<div class="mr-4">margin-right: 1rem</div>
<div class="mb-4">margin-bottom: 1rem</div>
<div class="ml-4">margin-left: 1rem</div>

<!-- Negative margins -->
<div class="-mt-4">margin-top: -1rem</div>
<div class="-mx-2">Negative horizontal margin</div>

<!-- Logical properties -->
<div class="ms-4">margin-inline-start</div>
<div class="me-4">margin-inline-end</div>
```

### Space Between (Flex/Grid children)

```html
<!-- Horizontal spacing -->
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Vertical spacing -->
<div class="flex flex-col space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Reverse -->
<div class="flex flex-row-reverse space-x-reverse space-x-4">
  Reversed spacing
</div>
```

---

## Sizing

### Width

```html
<!-- Fixed widths -->
<div class="w-0">width: 0</div>
<div class="w-4">width: 1rem</div>
<div class="w-64">width: 16rem</div>
<div class="w-96">width: 24rem</div>

<!-- Percentage widths -->
<div class="w-1/2">width: 50%</div>
<div class="w-1/3">width: 33.333%</div>
<div class="w-2/3">width: 66.666%</div>
<div class="w-1/4">width: 25%</div>
<div class="w-3/4">width: 75%</div>
<div class="w-full">width: 100%</div>

<!-- Viewport -->
<div class="w-screen">width: 100vw</div>
<div class="w-dvw">width: 100dvw (dynamic)</div>

<!-- Auto & Content -->
<div class="w-auto">width: auto</div>
<div class="w-min">width: min-content</div>
<div class="w-max">width: max-content</div>
<div class="w-fit">width: fit-content</div>
```

### Min/Max Width

```html
<!-- Min width -->
<div class="min-w-0">min-width: 0</div>
<div class="min-w-full">min-width: 100%</div>
<div class="min-w-min">min-width: min-content</div>
<div class="min-w-max">min-width: max-content</div>

<!-- Max width -->
<div class="max-w-xs">max-width: 20rem</div>
<div class="max-w-sm">max-width: 24rem</div>
<div class="max-w-md">max-width: 28rem</div>
<div class="max-w-lg">max-width: 32rem</div>
<div class="max-w-xl">max-width: 36rem</div>
<div class="max-w-2xl">max-width: 42rem</div>
<div class="max-w-3xl">max-width: 48rem</div>
<div class="max-w-4xl">max-width: 56rem</div>
<div class="max-w-5xl">max-width: 64rem</div>
<div class="max-w-6xl">max-width: 72rem</div>
<div class="max-w-7xl">max-width: 80rem</div>
<div class="max-w-full">max-width: 100%</div>
<div class="max-w-none">max-width: none</div>
<div class="max-w-prose">max-width: 65ch (readable)</div>
<div class="max-w-screen-sm">max-width: 640px</div>
<div class="max-w-screen-md">max-width: 768px</div>
<div class="max-w-screen-lg">max-width: 1024px</div>
<div class="max-w-screen-xl">max-width: 1280px</div>
```

### Height

```html
<!-- Fixed heights -->
<div class="h-0">height: 0</div>
<div class="h-4">height: 1rem</div>
<div class="h-64">height: 16rem</div>
<div class="h-96">height: 24rem</div>

<!-- Percentage -->
<div class="h-1/2">height: 50%</div>
<div class="h-full">height: 100%</div>

<!-- Viewport -->
<div class="h-screen">height: 100vh</div>
<div class="h-dvh">height: 100dvh (dynamic)</div>
<div class="h-svh">height: 100svh (small)</div>
<div class="h-lvh">height: 100lvh (large)</div>

<!-- Auto & Content -->
<div class="h-auto">height: auto</div>
<div class="h-min">height: min-content</div>
<div class="h-max">height: max-content</div>
<div class="h-fit">height: fit-content</div>
```

### Min/Max Height

```html
<!-- Min height -->
<div class="min-h-0">min-height: 0</div>
<div class="min-h-full">min-height: 100%</div>
<div class="min-h-screen">min-height: 100vh</div>

<!-- Max height -->
<div class="max-h-0">max-height: 0</div>
<div class="max-h-full">max-height: 100%</div>
<div class="max-h-screen">max-height: 100vh</div>
<div class="max-h-96">max-height: 24rem</div>
```

### Size (Width & Height)

```html
<div class="size-4">width & height: 1rem</div>
<div class="size-8">width & height: 2rem</div>
<div class="size-full">width & height: 100%</div>
```

---

## Typography

### Font Family

```html
<p class="font-sans">Sans-serif font</p>
<p class="font-serif">Serif font</p>
<p class="font-mono">Monospace font</p>
```

### Font Size

```html
<p class="text-xs">0.75rem (12px)</p>
<p class="text-sm">0.875rem (14px)</p>
<p class="text-base">1rem (16px)</p>
<p class="text-lg">1.125rem (18px)</p>
<p class="text-xl">1.25rem (20px)</p>
<p class="text-2xl">1.5rem (24px)</p>
<p class="text-3xl">1.875rem (30px)</p>
<p class="text-4xl">2.25rem (36px)</p>
<p class="text-5xl">3rem (48px)</p>
<p class="text-6xl">3.75rem (60px)</p>
<p class="text-7xl">4.5rem (72px)</p>
<p class="text-8xl">6rem (96px)</p>
<p class="text-9xl">8rem (128px)</p>
```

### Font Weight

```html
<p class="font-thin">100</p>
<p class="font-extralight">200</p>
<p class="font-light">300</p>
<p class="font-normal">400</p>
<p class="font-medium">500</p>
<p class="font-semibold">600</p>
<p class="font-bold">700</p>
<p class="font-extrabold">800</p>
<p class="font-black">900</p>
```

### Font Style

```html
<p class="italic">Italic text</p>
<p class="not-italic">Normal text</p>
```

### Text Alignment

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
<p class="text-justify">Justified text</p>
<p class="text-start">Start aligned</p>
<p class="text-end">End aligned</p>
```

### Text Color

```html
<p class="text-black">Black text</p>
<p class="text-white">White text</p>
<p class="text-gray-500">Gray 500</p>
<p class="text-red-500">Red 500</p>
<p class="text-blue-600">Blue 600</p>
<p class="text-green-400">Green 400</p>
<p class="text-transparent">Transparent</p>
<p class="text-current">Current color</p>

<!-- With opacity -->
<p class="text-blue-500/50">Blue with 50% opacity</p>
<p class="text-black/75">Black with 75% opacity</p>
```

### Text Decoration

```html
<p class="underline">Underlined</p>
<p class="overline">Overlined</p>
<p class="line-through">Strikethrough</p>
<p class="no-underline">No decoration</p>

<!-- Decoration style -->
<p class="underline decoration-solid">Solid</p>
<p class="underline decoration-double">Double</p>
<p class="underline decoration-dotted">Dotted</p>
<p class="underline decoration-dashed">Dashed</p>
<p class="underline decoration-wavy">Wavy</p>

<!-- Decoration color -->
<p class="underline decoration-red-500">Red underline</p>

<!-- Decoration thickness -->
<p class="underline decoration-1">1px</p>
<p class="underline decoration-2">2px</p>
<p class="underline decoration-4">4px</p>

<!-- Underline offset -->
<p class="underline underline-offset-2">2px offset</p>
<p class="underline underline-offset-4">4px offset</p>
```

### Text Transform

```html
<p class="uppercase">UPPERCASE</p>
<p class="lowercase">lowercase</p>
<p class="capitalize">Capitalize Each Word</p>
<p class="normal-case">Normal case</p>
```

### Line Height

```html
<p class="leading-none">1</p>
<p class="leading-tight">1.25</p>
<p class="leading-snug">1.375</p>
<p class="leading-normal">1.5</p>
<p class="leading-relaxed">1.625</p>
<p class="leading-loose">2</p>

<!-- Fixed line heights -->
<p class="leading-3">0.75rem</p>
<p class="leading-6">1.5rem</p>
<p class="leading-10">2.5rem</p>
```

### Letter Spacing

```html
<p class="tracking-tighter">-0.05em</p>
<p class="tracking-tight">-0.025em</p>
<p class="tracking-normal">0</p>
<p class="tracking-wide">0.025em</p>
<p class="tracking-wider">0.05em</p>
<p class="tracking-widest">0.1em</p>
```

### Text Overflow

```html
<!-- Truncate with ellipsis -->
<p class="truncate">Long text that gets cut off...</p>

<!-- Ellipsis -->
<p class="text-ellipsis overflow-hidden">Text with ellipsis</p>

<!-- Clip -->
<p class="text-clip overflow-hidden">Text that clips</p>
```

### Whitespace

```html
<p class="whitespace-normal">Normal wrapping</p>
<p class="whitespace-nowrap">No wrapping</p>
<p class="whitespace-pre">Preserve whitespace</p>
<p class="whitespace-pre-line">Preserve newlines</p>
<p class="whitespace-pre-wrap">Preserve all, wrap</p>
```

### Word Break

```html
<p class="break-normal">Normal breaks</p>
<p class="break-words">Break words</p>
<p class="break-all">Break anywhere</p>
<p class="break-keep">Keep words together</p>
```

### Lists

```html
<ul class="list-disc">
  Disc bullets
</ul>
<ul class="list-decimal">
  Numbers
</ul>
<ul class="list-none">
  No bullets
</ul>

<!-- List position -->
<ul class="list-inside">
  Inside
</ul>
<ul class="list-outside">
  Outside
</ul>
```

---

## Colors & Backgrounds

### Color Palette

Tailwind includes a comprehensive color palette with shades from 50-950:

```html
<!-- Format: {color}-{shade} -->
<!-- Shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 -->

<!-- Gray colors -->
<div class="bg-slate-500">Slate</div>
<div class="bg-gray-500">Gray</div>
<div class="bg-zinc-500">Zinc</div>
<div class="bg-neutral-500">Neutral</div>
<div class="bg-stone-500">Stone</div>

<!-- Colors -->
<div class="bg-red-500">Red</div>
<div class="bg-orange-500">Orange</div>
<div class="bg-amber-500">Amber</div>
<div class="bg-yellow-500">Yellow</div>
<div class="bg-lime-500">Lime</div>
<div class="bg-green-500">Green</div>
<div class="bg-emerald-500">Emerald</div>
<div class="bg-teal-500">Teal</div>
<div class="bg-cyan-500">Cyan</div>
<div class="bg-sky-500">Sky</div>
<div class="bg-blue-500">Blue</div>
<div class="bg-indigo-500">Indigo</div>
<div class="bg-violet-500">Violet</div>
<div class="bg-purple-500">Purple</div>
<div class="bg-fuchsia-500">Fuchsia</div>
<div class="bg-pink-500">Pink</div>
<div class="bg-rose-500">Rose</div>
```

### Background Color

```html
<div class="bg-white">White background</div>
<div class="bg-black">Black background</div>
<div class="bg-transparent">Transparent</div>
<div class="bg-current">Current color</div>
<div class="bg-inherit">Inherit</div>

<!-- With opacity -->
<div class="bg-blue-500/50">50% opacity</div>
<div class="bg-black/25">25% opacity</div>
```

### Background Gradient

```html
<!-- Gradient direction -->
<div class="bg-gradient-to-r from-blue-500 to-purple-500">Left to right</div>
<div class="bg-gradient-to-l from-blue-500 to-purple-500">Right to left</div>
<div class="bg-gradient-to-t from-blue-500 to-purple-500">Bottom to top</div>
<div class="bg-gradient-to-b from-blue-500 to-purple-500">Top to bottom</div>
<div class="bg-gradient-to-br from-blue-500 to-purple-500">To bottom-right</div>
<div class="bg-gradient-to-tl from-blue-500 to-purple-500">To top-left</div>

<!-- Three-color gradient -->
<div class="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
  Red → Yellow → Green
</div>

<!-- Gradient stop positions -->
<div
  class="bg-gradient-to-r from-blue-500 from-10% via-purple-500 via-50% to-pink-500 to-90%"
>
  Custom positions
</div>
```

### Background Size

```html
<div class="bg-auto">Auto</div>
<div class="bg-cover">Cover</div>
<div class="bg-contain">Contain</div>
```

### Background Position

```html
<div class="bg-center">Center</div>
<div class="bg-top">Top</div>
<div class="bg-bottom">Bottom</div>
<div class="bg-left">Left</div>
<div class="bg-right">Right</div>
<div class="bg-left-top">Left top</div>
<div class="bg-right-bottom">Right bottom</div>
```

### Background Repeat

```html
<div class="bg-repeat">Repeat</div>
<div class="bg-no-repeat">No repeat</div>
<div class="bg-repeat-x">Repeat X</div>
<div class="bg-repeat-y">Repeat Y</div>
<div class="bg-repeat-round">Round</div>
<div class="bg-repeat-space">Space</div>
```

### Background Attachment

```html
<div class="bg-fixed">Fixed (parallax)</div>
<div class="bg-local">Local</div>
<div class="bg-scroll">Scroll</div>
```

### Background Image

```html
<!-- Using arbitrary values -->
<div class="bg-[url('/image.jpg')]">Custom image</div>

<!-- Background none -->
<div class="bg-none">No background</div>
```

---

## Borders

### Border Width

```html
<div class="border">1px all sides</div>
<div class="border-0">No border</div>
<div class="border-2">2px</div>
<div class="border-4">4px</div>
<div class="border-8">8px</div>

<!-- Individual sides -->
<div class="border-t">Top border</div>
<div class="border-r">Right border</div>
<div class="border-b">Bottom border</div>
<div class="border-l">Left border</div>
<div class="border-x">Left and right</div>
<div class="border-y">Top and bottom</div>

<div class="border-t-2 border-b-4">Different widths</div>
```

### Border Color

```html
<div class="border border-black">Black border</div>
<div class="border border-gray-300">Gray border</div>
<div class="border border-blue-500">Blue border</div>
<div class="border border-transparent">Transparent</div>

<!-- Individual sides -->
<div class="border-t-red-500 border-b-blue-500">Different colors</div>

<!-- With opacity -->
<div class="border border-black/50">50% opacity</div>
```

### Border Style

```html
<div class="border-solid">Solid</div>
<div class="border-dashed">Dashed</div>
<div class="border-dotted">Dotted</div>
<div class="border-double">Double</div>
<div class="border-hidden">Hidden</div>
<div class="border-none">None</div>
```

### Border Radius

```html
<div class="rounded-none">0</div>
<div class="rounded-sm">0.125rem</div>
<div class="rounded">0.25rem</div>
<div class="rounded-md">0.375rem</div>
<div class="rounded-lg">0.5rem</div>
<div class="rounded-xl">0.75rem</div>
<div class="rounded-2xl">1rem</div>
<div class="rounded-3xl">1.5rem</div>
<div class="rounded-full">9999px (circle)</div>

<!-- Individual corners -->
<div class="rounded-t-lg">Top corners</div>
<div class="rounded-r-lg">Right corners</div>
<div class="rounded-b-lg">Bottom corners</div>
<div class="rounded-l-lg">Left corners</div>
<div class="rounded-tl-lg">Top-left only</div>
<div class="rounded-tr-lg">Top-right only</div>
<div class="rounded-br-lg">Bottom-right only</div>
<div class="rounded-bl-lg">Bottom-left only</div>
```

### Divide (Between children)

```html
<!-- Dividers between children -->
<div class="divide-y">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="divide-x">
  <span>A</span>
  <span>B</span>
  <span>C</span>
</div>

<!-- Divide color -->
<div class="divide-y divide-gray-300">Colored dividers</div>

<!-- Divide width -->
<div class="divide-y-2">2px dividers</div>
<div class="divide-y-4">4px dividers</div>

<!-- Divide style -->
<div class="divide-y divide-dashed">Dashed dividers</div>
```

### Outline

```html
<button class="outline">Default outline</button>
<button class="outline-none">No outline</button>
<button class="outline-1">1px outline</button>
<button class="outline-2">2px outline</button>

<!-- Outline style -->
<button class="outline outline-dashed">Dashed</button>
<button class="outline outline-dotted">Dotted</button>

<!-- Outline color -->
<button class="outline outline-blue-500">Blue outline</button>

<!-- Outline offset -->
<button class="outline outline-offset-2">2px offset</button>
```

### Ring (Focus rings)

```html
<button class="ring">Default ring</button>
<button class="ring-0">No ring</button>
<button class="ring-1">1px ring</button>
<button class="ring-2">2px ring</button>
<button class="ring-4">4px ring</button>

<!-- Ring color -->
<button class="ring-2 ring-blue-500">Blue ring</button>

<!-- Ring offset -->
<button class="ring-2 ring-offset-2">With offset</button>
<button class="ring-2 ring-offset-4 ring-offset-gray-100">Custom offset</button>

<!-- Inset ring -->
<button class="ring-2 ring-inset">Inset ring</button>
```

---

## Effects & Filters

### Box Shadow

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2XL shadow</div>
<div class="shadow-inner">Inner shadow</div>
<div class="shadow-none">No shadow</div>

<!-- Shadow color -->
<div class="shadow-lg shadow-blue-500/50">Blue shadow</div>
```

### Opacity

```html
<div class="opacity-0">0%</div>
<div class="opacity-5">5%</div>
<div class="opacity-10">10%</div>
<div class="opacity-25">25%</div>
<div class="opacity-50">50%</div>
<div class="opacity-75">75%</div>
<div class="opacity-100">100%</div>
```

### Blur

```html
<div class="blur-none">No blur</div>
<div class="blur-sm">Small blur</div>
<div class="blur">Default blur</div>
<div class="blur-md">Medium blur</div>
<div class="blur-lg">Large blur</div>
<div class="blur-xl">XL blur</div>
<div class="blur-2xl">2XL blur</div>
<div class="blur-3xl">3XL blur</div>
```

### Brightness

```html
<img class="brightness-0">0%</img>
<img class="brightness-50">50%</img>
<img class="brightness-100">100% (normal)</img>
<img class="brightness-150">150%</img>
<img class="brightness-200">200%</img>
```

### Contrast

```html
<img class="contrast-0">0%</img>
<img class="contrast-50">50%</img>
<img class="contrast-100">100% (normal)</img>
<img class="contrast-150">150%</img>
<img class="contrast-200">200%</img>
```

### Grayscale

```html
<img class="grayscale-0">No grayscale</img>
<img class="grayscale">Full grayscale</img>
```

### Hue Rotate

```html
<img class="hue-rotate-0">0°</img>
<img class="hue-rotate-15">15°</img>
<img class="hue-rotate-30">30°</img>
<img class="hue-rotate-60">60°</img>
<img class="hue-rotate-90">90°</img>
<img class="hue-rotate-180">180°</img>
```

### Invert

```html
<img class="invert-0">No invert</img>
<img class="invert">Full invert</img>
```

### Saturate

```html
<img class="saturate-0">0%</img>
<img class="saturate-50">50%</img>
<img class="saturate-100">100% (normal)</img>
<img class="saturate-150">150%</img>
<img class="saturate-200">200%</img>
```

### Sepia

```html
<img class="sepia-0">No sepia</img>
<img class="sepia">Full sepia</img>
```

### Backdrop Blur

```html
<div class="backdrop-blur-sm">Small</div>
<div class="backdrop-blur">Default</div>
<div class="backdrop-blur-md">Medium</div>
<div class="backdrop-blur-lg">Large</div>
<div class="backdrop-blur-xl">XL</div>
<div class="backdrop-blur-2xl">2XL</div>
<div class="backdrop-blur-3xl">3XL</div>
```

### Mix Blend Mode

```html
<div class="mix-blend-normal">Normal</div>
<div class="mix-blend-multiply">Multiply</div>
<div class="mix-blend-screen">Screen</div>
<div class="mix-blend-overlay">Overlay</div>
<div class="mix-blend-darken">Darken</div>
<div class="mix-blend-lighten">Lighten</div>
<div class="mix-blend-color-dodge">Color dodge</div>
<div class="mix-blend-color-burn">Color burn</div>
<div class="mix-blend-difference">Difference</div>
<div class="mix-blend-exclusion">Exclusion</div>
```

---

## Transitions & Animations

### Transition Property

```html
<div class="transition-none">No transition</div>
<div class="transition-all">All properties</div>
<div class="transition">Default (common props)</div>
<div class="transition-colors">Colors only</div>
<div class="transition-opacity">Opacity only</div>
<div class="transition-shadow">Shadow only</div>
<div class="transition-transform">Transform only</div>
```

### Transition Duration

```html
<div class="duration-0">0ms</div>
<div class="duration-75">75ms</div>
<div class="duration-100">100ms</div>
<div class="duration-150">150ms</div>
<div class="duration-200">200ms</div>
<div class="duration-300">300ms</div>
<div class="duration-500">500ms</div>
<div class="duration-700">700ms</div>
<div class="duration-1000">1000ms</div>
```

### Transition Timing Function

```html
<div class="ease-linear">Linear</div>
<div class="ease-in">Ease in</div>
<div class="ease-out">Ease out</div>
<div class="ease-in-out">Ease in-out</div>
```

### Transition Delay

```html
<div class="delay-0">0ms</div>
<div class="delay-75">75ms</div>
<div class="delay-100">100ms</div>
<div class="delay-150">150ms</div>
<div class="delay-200">200ms</div>
<div class="delay-300">300ms</div>
<div class="delay-500">500ms</div>
<div class="delay-700">700ms</div>
<div class="delay-1000">1000ms</div>
```

### Animation

```html
<div class="animate-none">No animation</div>
<div class="animate-spin">Spin (loading)</div>
<div class="animate-ping">Ping (notification)</div>
<div class="animate-pulse">Pulse (skeleton)</div>
<div class="animate-bounce">Bounce (attention)</div>
```

### Common Transition Examples

```html
<!-- Button hover effect -->
<button class="bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
  Hover me
</button>

<!-- Scale on hover -->
<div class="hover:scale-105 transition-transform duration-300">Scale up</div>

<!-- Fade in -->
<div class="opacity-0 hover:opacity-100 transition-opacity duration-500">
  Fade in
</div>

<!-- Multiple transitions -->
<button
  class="bg-blue-500 hover:bg-blue-600 hover:shadow-lg 
               hover:-translate-y-1 transition-all duration-300"
>
  Lift effect
</button>
```

---

## Transforms

### Scale

```html
<div class="scale-0">0%</div>
<div class="scale-50">50%</div>
<div class="scale-75">75%</div>
<div class="scale-90">90%</div>
<div class="scale-95">95%</div>
<div class="scale-100">100%</div>
<div class="scale-105">105%</div>
<div class="scale-110">110%</div>
<div class="scale-125">125%</div>
<div class="scale-150">150%</div>

<!-- Individual axis -->
<div class="scale-x-50">50% horizontal</div>
<div class="scale-y-150">150% vertical</div>
```

### Rotate

```html
<div class="rotate-0">0°</div>
<div class="rotate-1">1°</div>
<div class="rotate-2">2°</div>
<div class="rotate-3">3°</div>
<div class="rotate-6">6°</div>
<div class="rotate-12">12°</div>
<div class="rotate-45">45°</div>
<div class="rotate-90">90°</div>
<div class="rotate-180">180°</div>

<!-- Negative rotation -->
<div class="-rotate-45">-45°</div>
<div class="-rotate-90">-90°</div>
```

### Translate

```html
<!-- Translate X -->
<div class="translate-x-0">0</div>
<div class="translate-x-4">1rem</div>
<div class="translate-x-1/2">50%</div>
<div class="translate-x-full">100%</div>
<div class="-translate-x-4">-1rem</div>
<div class="-translate-x-1/2">-50%</div>

<!-- Translate Y -->
<div class="translate-y-0">0</div>
<div class="translate-y-4">1rem</div>
<div class="translate-y-1/2">50%</div>
<div class="-translate-y-1/2">-50%</div>
```

### Skew

```html
<div class="skew-x-0">0°</div>
<div class="skew-x-1">1°</div>
<div class="skew-x-3">3°</div>
<div class="skew-x-6">6°</div>
<div class="skew-x-12">12°</div>
<div class="-skew-x-6">-6°</div>

<div class="skew-y-3">3° Y</div>
<div class="-skew-y-3">-3° Y</div>
```

### Transform Origin

```html
<div class="origin-center">Center</div>
<div class="origin-top">Top</div>
<div class="origin-top-right">Top right</div>
<div class="origin-right">Right</div>
<div class="origin-bottom-right">Bottom right</div>
<div class="origin-bottom">Bottom</div>
<div class="origin-bottom-left">Bottom left</div>
<div class="origin-left">Left</div>
<div class="origin-top-left">Top left</div>
```

---

## Interactivity

### Cursor

```html
<div class="cursor-auto">Auto</div>
<div class="cursor-default">Default</div>
<div class="cursor-pointer">Pointer (hand)</div>
<div class="cursor-wait">Wait</div>
<div class="cursor-text">Text</div>
<div class="cursor-move">Move</div>
<div class="cursor-not-allowed">Not allowed</div>
<div class="cursor-grab">Grab</div>
<div class="cursor-grabbing">Grabbing</div>
<div class="cursor-crosshair">Crosshair</div>
<div class="cursor-zoom-in">Zoom in</div>
<div class="cursor-zoom-out">Zoom out</div>
```

### Pointer Events

```html
<div class="pointer-events-none">Ignore pointer events</div>
<div class="pointer-events-auto">Normal pointer events</div>
```

### User Select

```html
<p class="select-none">Cannot select text</p>
<p class="select-text">Can select text</p>
<p class="select-all">Select all on click</p>
<p class="select-auto">Auto (default)</p>
```

### Touch Action

```html
<div class="touch-auto">Auto</div>
<div class="touch-none">None</div>
<div class="touch-pan-x">Pan X only</div>
<div class="touch-pan-y">Pan Y only</div>
<div class="touch-manipulation">Pan & zoom</div>
```

### Resize

```html
<textarea class="resize-none">Cannot resize</textarea>
<textarea class="resize">Both directions</textarea>
<textarea class="resize-x">Horizontal only</textarea>
<textarea class="resize-y">Vertical only</textarea>
```

### Scroll Behavior

```html
<div class="scroll-auto">Auto scrolling</div>
<div class="scroll-smooth">Smooth scrolling</div>
```

### Scroll Snap

```html
<!-- Container -->
<div class="snap-x">Horizontal snap</div>
<div class="snap-y">Vertical snap</div>
<div class="snap-both">Both directions</div>
<div class="snap-mandatory">Mandatory snapping</div>
<div class="snap-proximity">Proximity snapping</div>

<!-- Children -->
<div class="snap-start">Snap to start</div>
<div class="snap-center">Snap to center</div>
<div class="snap-end">Snap to end</div>
<div class="snap-align-none">No snap alignment</div>
```

### Caret Color

```html
<input class="caret-blue-500" type="text" />
<input class="caret-red-500" type="text" />
<input class="caret-transparent" type="text" />
```

### Accent Color

```html
<input type="checkbox" class="accent-pink-500" />
<input type="radio" class="accent-blue-500" />
<input type="range" class="accent-green-500" />
```

---

## Responsive Design

### Breakpoints

| Prefix | Min Width | CSS                          |
| ------ | --------- | ---------------------------- |
| `sm:`  | 640px     | `@media (min-width: 640px)`  |
| `md:`  | 768px     | `@media (min-width: 768px)`  |
| `lg:`  | 1024px    | `@media (min-width: 1024px)` |
| `xl:`  | 1280px    | `@media (min-width: 1280px)` |
| `2xl:` | 1536px    | `@media (min-width: 1536px)` |

### Mobile-First Approach

```html
<!-- Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>

<!-- Responsive text sizes -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">Responsive heading</h1>

<!-- Responsive padding -->
<div class="p-4 md:p-8 lg:p-12">Responsive padding</div>

<!-- Responsive flexbox -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2">Half on desktop</div>
  <div class="w-full md:w-1/2">Half on desktop</div>
</div>

<!-- Hide/show at breakpoints -->
<div class="hidden md:block">Visible on tablet+</div>
<div class="block md:hidden">Visible on mobile only</div>
```

### Container Queries (v3.4+)

```html
<!-- Define container -->
<div class="@container">
  <!-- Query container size -->
  <div class="@md:flex @lg:grid">Content adapts to container</div>
</div>

<!-- Named containers -->
<div class="@container/sidebar">
  <div class="@md/sidebar:flex">Queries 'sidebar' container</div>
</div>
```

---

## Dark Mode

### Enabling Dark Mode

```html
<!-- Using dark: prefix -->
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  Light/dark adaptive content
</div>
```

### Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class", // or 'media' for system preference
  // ...
};
```

### Common Dark Mode Patterns

```html
<!-- Card with dark mode -->
<div
  class="bg-white dark:bg-gray-800 
            text-gray-900 dark:text-gray-100
            border border-gray-200 dark:border-gray-700
            shadow-lg dark:shadow-gray-900/50
            rounded-lg p-6"
>
  Dark mode card
</div>

<!-- Button with dark mode -->
<button
  class="bg-blue-500 dark:bg-blue-600
               hover:bg-blue-600 dark:hover:bg-blue-700
               text-white px-4 py-2 rounded"
>
  Button
</button>

<!-- Toggle dark mode with JavaScript -->
<script>
  document.documentElement.classList.toggle("dark");
</script>
```

---

## State Modifiers

### Pseudo-Classes

```html
<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-600">Hover me</button>

<!-- Focus -->
<input class="focus:ring-2 focus:ring-blue-500 focus:outline-none" />

<!-- Active -->
<button class="active:bg-blue-700">Click me</button>

<!-- Visited -->
<a class="text-blue-500 visited:text-purple-500">Link</a>

<!-- First/Last child -->
<li class="first:pt-0 last:pb-0">Item</li>

<!-- Odd/Even -->
<tr class="odd:bg-gray-100 even:bg-white">
  Row
</tr>

<!-- Disabled -->
<button class="disabled:opacity-50 disabled:cursor-not-allowed" disabled>
  Disabled
</button>

<!-- Required -->
<input class="required:border-red-500" required />

<!-- Invalid -->
<input class="invalid:border-red-500" type="email" />

<!-- Checked -->
<input type="checkbox" class="checked:bg-blue-500" />

<!-- Focus Within -->
<div class="focus-within:ring-2">Contains focused element</div>

<!-- Focus Visible -->
<button class="focus-visible:ring-2">Keyboard focus only</button>

<!-- Placeholder -->
<input class="placeholder:text-gray-400" placeholder="Enter text" />
```

### Group Modifiers

```html
<!-- Group hover -->
<div class="group">
  <h3 class="group-hover:text-blue-500">Title</h3>
  <p class="group-hover:opacity-100 opacity-50">Content</p>
</div>

<!-- Named groups -->
<div class="group/card">
  <div class="group-hover/card:bg-blue-100">Card content</div>
</div>
```

### Peer Modifiers

```html
<!-- Peer state -->
<input type="checkbox" class="peer" id="toggle" />
<label class="peer-checked:text-blue-500">Label changes when checked</label>

<input class="peer" placeholder="Email" />
<p class="invisible peer-invalid:visible text-red-500">Invalid email</p>
```

### Before/After Pseudo-elements

```html
<div class="before:content-['→'] before:mr-2">With arrow</div>

<div class="after:content-['*'] after:text-red-500">Required field</div>

<div class="before:block before:h-1 before:w-full before:bg-blue-500">
  With colored bar
</div>
```

---

## Arbitrary Values

When built-in utilities aren't enough:

```html
<!-- Arbitrary values with [] -->
<div class="w-[137px]">Exact 137px width</div>
<div class="bg-[#1da1f2]">Exact hex color</div>
<div class="text-[22px]">Exact font size</div>
<div class="p-[5px_10px]">Custom padding</div>
<div class="grid-cols-[1fr_500px_2fr]">Custom grid</div>
<div class="top-[117px]">Custom positioning</div>

<!-- With CSS variables -->
<div class="bg-[var(--brand-color)]">Using CSS variable</div>

<!-- Arbitrary properties -->
<div class="[mask-type:luminance]">Custom CSS property</div>
```

---

## Custom Configuration

### tailwind.config.js

```javascript
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    // Override defaults
    colors: {
      brand: "#1da1f2",
    },
    // Extend defaults
    extend: {
      colors: {
        brand: {
          light: "#63b3ed",
          DEFAULT: "#1da1f2",
          dark: "#0c85d0",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
```

### Using Custom Values

```html
<div class="text-brand">Brand color</div>
<div class="font-display">Display font</div>
<div class="p-128">Custom padding</div>
<div class="rounded-4xl">Custom radius</div>
<div class="animate-spin-slow">Slow spin</div>
```

---

## Quick Reference

### Common Component Patterns

```html
<!-- Button -->
<button
  class="bg-blue-500 hover:bg-blue-600 text-white 
               font-semibold py-2 px-4 rounded-lg
               transition duration-300 shadow-md hover:shadow-lg"
>
  Button
</button>

<!-- Card -->
<div
  class="bg-white rounded-xl shadow-lg p-6 
            dark:bg-gray-800 dark:text-white"
>
  <h3 class="text-xl font-bold mb-2">Title</h3>
  <p class="text-gray-600 dark:text-gray-300">Content</p>
</div>

<!-- Badge -->
<span
  class="inline-flex items-center px-2.5 py-0.5 
             rounded-full text-xs font-medium 
             bg-blue-100 text-blue-800"
>
  Badge
</span>

<!-- Avatar -->
<img
  class="w-10 h-10 rounded-full object-cover 
            ring-2 ring-white"
  src="avatar.jpg"
/>

<!-- Input -->
<input
  class="w-full px-4 py-2 border border-gray-300 
              rounded-lg focus:ring-2 focus:ring-blue-500 
              focus:border-transparent outline-none
              transition duration-200"
/>

<!-- Alert -->
<div
  class="bg-yellow-50 border-l-4 border-yellow-400 
            p-4 text-yellow-700"
>
  <p class="font-bold">Warning</p>
  <p>Something needs attention.</p>
</div>
```

---

> **Happy Coding with Tailwind CSS! 🚀**
>
> For more details, visit [Tailwind CSS Documentation](https://tailwindcss.com/docs)
