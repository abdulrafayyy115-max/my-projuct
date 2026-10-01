function toggleMode() {
  document.body.classList.toggle("dark");

  const button = document.getElementById("modeBtn");

  if (document.body.classList.contains("dark")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
}

function showMessage(place) {
  alert("You selected " + place + ". More travel information coming soon!");
}

function showAbout() {
  alert(
    "Travel Explorer is a small travel website project created using HTML, CSS and JavaScript.",
  );
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Thank you, " + name + "! Your message has been submitted.");

  event.target.reset();
}
