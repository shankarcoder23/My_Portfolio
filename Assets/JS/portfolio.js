
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // CLICK — set active when clicked
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // SCROLL — set active based on section in viewport
  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 120; // offset for fixed navbar

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });

