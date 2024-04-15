const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
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
 
    // Function to update active link based on scroll position
// Smooth scrolling function
function smoothScrollTo(targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Add smooth scroll behavior to navigation links
const links = document.querySelectorAll("#nav-1 h4 a");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            smoothScrollTo(targetElement);
        }
    });
});
