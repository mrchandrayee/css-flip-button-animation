# CSS Flip Button Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-flip-button-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, runnable recreation of the uploaded 22.83-second screen recording.

## Five effects visible in the video

1. **Classic 3D Flip Button** — flips around the X axis; purple gradient front.
2. **Neon 3D Flip Button** — flips around the Y axis; black face with cyan neon border and blue glow.
3. **Glassmorphism Flip Button** — X-axis flip with translucent glass face and 12px backdrop blur.
4. **Explosion Flip Button** — Y-axis flip with a slight 1.08 scale-up and warm red/pink gradient.
5. **Cyber Flip Button** — flips around both X and Y axes; black face with cyan border.

## Visible CSS transcribed from the screen

The video visibly shows these selectors and declarations:

```css
.flip1:hover .flip-btn {
  transform: rotateX(180deg);
}

.flip1 .front {
  background:
    linear-gradient(135deg, #7c3aed, #4f46e5);
}

.flip2:hover .flip-btn {
  transform: rotateY(180deg);
}

.flip2 .front {
  background: #000;
  border: 2px solid #00f5ff;
  box-shadow: 0 0 20px #0085ff;
}

.flip3:hover .flip-btn {
  transform: rotateX(-180deg);
}

.flip3 .face {
  backdrop-filter: blur(12px);
}

.flip3 .front {
  background: rgba(255,255,255,0.08);
}

.flip4:hover .flip-btn {
  transform:
    rotateY(-180deg)
    scale(1.08);
}

.flip4 .front {
  background:
    linear-gradient(135deg, #ff512f, #dd2476);
}

.flip5:hover .flip-btn {
  transform:
    rotateX(180deg)
    rotateY(180deg);
}

.flip5 .front {
  background: #000;
  border: 2px solid #00ffe7;
}
```

The recording shows the main hover transforms and several front-face styles, but not every HTML element, back-face declaration, or supporting 3D CSS rule. Those parts have been reconstructed to make all five flip buttons work as standalone examples. The demo labels on the front/back are illustrative where the original recording's tiny text is not fully legible.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in Chrome, Firefox, Safari, or Edge.
3. Hover a button to flip it.
4. On mobile, tap a button to toggle its flip. Tap outside or press Escape to reset.

No npm install, framework, build step, or internet connection is required.

## Files

- `index.html` — five flip button examples and code snippets
- `style.css` — 3D transforms, front/back faces, neon/glass/cyber styles
- `script.js` — touch interaction and reset behavior
- `README.md` — source transcription and setup guide

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
