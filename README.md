# ❌⭕ Tic-Tac-Toe Web Game

A lightweight, responsive, and completely interactive Tic-Tac-Toe web game built from scratch using clean **HTML5**, **CSS3 (Flexbox/Vmin)**, and **Vanilla JavaScript**. 

This project showcases fundamental front-end principles, including dynamic DOM manipulation, state architecture, and robust algorithmic game-loop validation.

---

## 🚀 Live Preview & Code
* **Repository:** [GitHub Link](https://github.com/MohammedAnasuddinZaid/TIC-TAC-TOE-JS-PROJECT-.git)

---

## ✨ Features
* **Turn-Based Mechanics:** Alternates dynamically between `X` and `O` inputs.
* **Smart Validation Engine:** Scans board configurations after every click to determine win states across 8 matrix patterns (rows, columns, and diagonals).
* **Edge-Case Draw Logic:** Seamlessly handles tie games by tracking move limits without structural state failures.
* **Fluid Layout:** Designed with a mobile-first approach using CSS `Flexbox` and viewport metrics (`vmin`) for sharp scaling across all devices.
* **Instant Session Reset:** Features built-in 'Reset Game' and 'New Game' triggers that refresh the state engine instantly.

---

## 🛠️ Tech Stack Used
* **HTML5:** Semantic document profiling.
* **CSS3:** Custom UI layout structuring, flex configurations, and interactive styling.
* **Vanilla JavaScript (ES6+):** Event architecture, multidimensional tracking vectors, and application logic.

---

## 🧠 Technical Highlights & Logic Overview

### 1. Matrix Win-Pattern Verification
The game evaluates board states on every interaction using a predefined multi-dimensional array mapping out matching victory rows:
```javascript
const winiingpatter = [
    [0,1,2], [0,3,6], [0,4,8],
    [1,4,7], [2,5,8], [3,4,5],
    [6,7,8], [2,4,6]
];
