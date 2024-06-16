document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  navToggle.addEventListener("click", function () {
    links.classList.toggle("show");
  });

  function switchSection(sectionId) {
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add("active");
        window.scrollTo({
          top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
          behavior: 'smooth'
        });
      } else {
        section.classList.remove("active");
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");
      switchSection(sectionId);
      links.classList.remove("show"); 
    });
  });

  switchSection("home");
});
