import './main.css';

const cardElement = document.getElementById("card");
const cardLinkElement = document.getElementById("card-link");

cardLinkElement?.addEventListener("mouseenter", () => {
  if (cardElement) {
    cardElement.style.setProperty("--_card-box-shadow", "var(--_card-box-shadow-hover)");
  }
});

cardLinkElement?.addEventListener("mouseleave", () => {
  if (cardElement) {
    cardElement.style.removeProperty("--_card-box-shadow");
  }
});