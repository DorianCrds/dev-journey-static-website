const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  const title = project.querySelector(".project-title");

  title.addEventListener("click", () => {
    const isActive = project.classList.contains("active");

    projects.forEach((p) => {
      p.classList.remove("active");
    });

    if (!isActive) {
      project.classList.add("active");
    }
  });
});

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});


const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  contactForm.reset();

  const successMessage = document.createElement("p");
  successMessage.textContent =
    "Thank you for your message! I will get back to you soon.";
  successMessage.style.marginTop = "1rem";
  successMessage.style.color = "var(--accent)";
  successMessage.style.fontWeight = "500";

  const existingMessage = contactForm.querySelector(".success-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  successMessage.classList.add("success-message");
  contactForm.appendChild(successMessage);
});
