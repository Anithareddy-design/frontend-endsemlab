document.querySelector("#contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  document.querySelector("#message").textContent =
    `Thank you, ${name}! Your message has been received.`;

  this.reset();
});