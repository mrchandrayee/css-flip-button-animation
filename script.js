// Touch-friendly flip toggle. Desktop users can use hover or keyboard focus.
const flipButtons = document.querySelectorAll(".flip-scene");

flipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const wasFlipped = button.classList.contains("is-flipped");
    flipButtons.forEach((item) => item.classList.remove("is-flipped"));
    if (!wasFlipped) button.classList.add("is-flipped");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".flip-scene")) {
    flipButtons.forEach((button) => button.classList.remove("is-flipped"));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    flipButtons.forEach((button) => button.classList.remove("is-flipped"));
  }
});
