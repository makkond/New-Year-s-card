document.addEventListener("DOMContentLoaded", () => {
  const snowflakesContainer = document.querySelector(".snowflakes");
  const button = document.querySelector(".card__button");
  let isGiftOpen = false;

  // Створення сніжинок
  function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.opacity = Math.random();
      snowflake.style.width = `${Math.random() * 5 + 2}px`;
      snowflake.style.height = snowflake.style.width;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.animationDelay = `${Math.random() * 2}s`;
      snowflakesContainer.appendChild(snowflake);
    }
  }

  // Анімація подарунка
  function animateGift() {
    const gifts = document.querySelectorAll(".card__gift");
    gifts.forEach((gift) => {
      gift.style.transform = "scale(1.2)";
      setTimeout(() => {
        gift.style.transform = "scale(1)";
      }, 200);
    });
  }

  // Обробник кліку на кнопку
  button.addEventListener("click", () => {
    if (!isGiftOpen) {
      animateGift();
      button.textContent = "Ваш подарунок - гарний настрій на весь рік! 🎁";
      isGiftOpen = true;
    }
  });

  // Створення сніжинок при завантаженні
  createSnowflakes();
});
