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
