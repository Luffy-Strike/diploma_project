function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showDetails(eventId) {
  const events = {
    1: "Подробности беговой гонки...",
    2: "Подробности баскетбольного турнира...",
    3: "Подробности волейбольного матча...",
    4: "Подробности футбольного первенства...",
    5: "Подробности соревнований по плаванию..."
  };

  alert(events[eventId]);
}

document.getElementById("registration-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Вы успешно зарегистрировались!");
});