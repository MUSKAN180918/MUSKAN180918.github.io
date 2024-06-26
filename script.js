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
 

function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}
const links = document.querySelectorAll("#nav-1 h4 a");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const id = this.getAttribute("href");
        const target = document.querySelector(id);
        if (target) {
            smoothScrollTo(target);
        }
    });
});

