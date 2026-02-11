/* -------------------- */
/* Projects accordion   */
/* -------------------- */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  const title = project.querySelector(".project-title");

  title.addEventListener("click", () => {
    const isActive = project.classList.contains("active");

    projects.forEach((p) => p.classList.remove("active"));

    if (!isActive) {
      project.classList.add("active");
    }
  });
});

/* -------------------- */
/* Smooth navigation    */
/* -------------------- */

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

/* -------------------- */
/* Burger menu          */
/* -------------------- */

const burger = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("open");
  });
});

/* -------------------- */
/* Contact form         */
/* -------------------- */

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  contactForm.reset();

  const successMessage = document.createElement("p");
  successMessage.textContent =
    "Thank you for your message! I will get back to you soon.";
  successMessage.style.marginTop = "1rem";
  successMessage.style.color = "var(--accent)";
  successMessage.style.fontWeight = "500";
  successMessage.classList.add("success-message");

  const existing = contactForm.querySelector(".success-message");
  if (existing) existing.remove();

  contactForm.appendChild(successMessage);
});
