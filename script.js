const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById("about-link");
    const skillsLink = document.getElementById("skills-link");
    const projectsLink = document.getElementById("projects-link");
    const contactLink = document.getElementById("contact-link");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement("page2");
    });

    skillsLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement("page3");
    });

    projectsLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement("page4");
    });

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement("page5");
    });

    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }

    // Add event listener for scrolling
    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        // Define the threshold values for each section
        const aboutSection = document.getElementById("page1");
        const skillsSection = document.getElementById("page2");
        const projectsSection = document.getElementById("page3");
        const contactSection = document.getElementById("page4");

        const aboutTop = aboutSection.offsetTop;
        const skillsTop = skillsSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        const contactTop = contactSection.offsetTop;

        // Highlight the active link based on the scroll position
        if (scrollPosition < skillsTop) {
            setActiveLink(aboutLink);
        } else if (scrollPosition >= skillsTop && scrollPosition < projectsTop) {
            setActiveLink(skillsLink);
        } else if (scrollPosition >= projectsTop && scrollPosition < contactTop) {
            setActiveLink(projectsLink);
        } else {
            setActiveLink(contactLink);
        }
    });

    function setActiveLink(link) {
        // Remove active class from all links
        const links = document.querySelectorAll("nav h4 a");
        links.forEach(link => {
            link.classList.remove("active");
        });

        // Add active class to the current link
        link.classList.add("active");
    }
});
