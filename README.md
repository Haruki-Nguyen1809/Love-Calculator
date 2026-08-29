# 💘 Love Calculator

A fun, interactive web app that "calculates" a random love score between two names, styled with a heartbeat animation and a custom romantic font.

## Features

- Enter two names and get an instant, randomly generated love compatibility score (1–100)
- Names are automatically formatted with proper capitalization (each word capitalized, e.g. `nguyen van an` → `Nguyen Van An`)
- Animated pulsing heart between the two input fields
- Responsive layout — inputs and heart stack vertically on smaller screens
- Custom message feedback based on the score:
  - **> 70**: "What a perfect match."
  - **40–70**: "What a work-in-progress connection."
  - **< 40**: "What a loveless relationship."

## Tech Stack

- **HTML5** — page structure
- **CSS3** — Flexbox layout, media queries, `@keyframes` animation, custom `@font-face`
- **Vanilla JavaScript** — DOM manipulation, event handling, array/string methods

## Project Structure

```
love-calculator/
├── index.html
├── index.js
├── style.css
└── fonts/
    └── Flowmery-Regular.ttf
```

## How It Works

1. The user types both names into the input fields and clicks **Calculate**.
2. Each name is split into individual words, capitalized (first letter uppercase, rest lowercase), then rejoined — using `split()`, `map()`, and `join()`.
3. A random love score is generated using `Math.floor(Math.random() * 101) + 1`.
4. The formatted names are displayed above the result, and a message is shown based on which score range the result falls into.

## Getting Started

1. Clone or download this repository.
2. Make sure the `fonts/` folder (containing `Flowmery-Regular.ttf`) sits in the same directory as `style.css`.
3. Open `index.html` in your browser — no build step or dependencies required.

## Possible Improvements

- Add input validation (e.g. prevent empty names from being submitted)
- Persist the last calculated score using `localStorage`
- Add a "recalculate" button that doesn't require re-entering names
- Add unit tests for the `capitalizeWords` and `randomLove` functions

## Author

Built as a personal coding + creative project while learning full-stack web development.
