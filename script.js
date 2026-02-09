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
