// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form Submit 
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Clear old message if exists
  const oldMsg = document.querySelector(".form-message");
  if (oldMsg) oldMsg.remove();

  // Create success message
  const msg = document.createElement("p");
  msg.classList.add("form-message");
  msg.innerText = "Thanks! for contacting me";
  msg.style.color = "green";
  msg.style.marginTop = "10px";
  msg.style.fontWeight = "bold";

  form.appendChild(msg);

  form.reset();

  setTimeout(() => {
    msg.remove();
  }, 2000);
});

