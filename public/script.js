// script.js

// Обработка формы регистрации
document.getElementById("registration-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const successMessage = document.getElementById("success-message");
  successMessage.classList.remove("hidden");

  // Сброс через 3 секунды
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 3000);
});