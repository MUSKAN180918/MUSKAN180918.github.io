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

 const links = document.querySelectorAll("#nav-1 h4 a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                scroll.scrollTo(targetElement);
            }
        });
    });
        // Add active class to the current link
        link.classList.add("active");
    }
});
