const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;
const avatar = document.getElementById("avatar");

// Toggle dark mode and avatar
toggleTheme.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    avatar.src = "assets/avatar-confidence1.png"; // swap this path if needed
  } else {
    avatar.src = "assets/avatar-confidence1.png";
  }
});

// Popup functionality
function showPopup() {
  const popup = document.getElementById("customPopup");
  popup.classList.remove("hidden");

  // Automatically fade out after 5 seconds
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 5000);
}

function closePopup() {
  document.getElementById("customPopup").classList.add("hidden");
}

// Optional: Close popup if clicked outside
window.addEventListener("click", (e) => {
  const popup = document.getElementById("customPopup");
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});
