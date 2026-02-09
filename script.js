const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    const title = project.querySelector(".project-title");

    title.addEventListener("click", () => {
        project.classList.toggle("active");
    });
})