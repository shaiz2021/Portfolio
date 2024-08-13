const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '25px',
    duration: 1500,
    reset: true
})

sr.reveal('.home-text', { delay: 550, origin: 'bottom' })

sr.reveal('.about, .services, .projects', { delay: 100, origin: 'bottom' })


document.addEventListener('scroll', () => {
    const content = document.querySelector('.row');
    const rect = content.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the content is fully in the viewport
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
        content.style.opacity = 1; // Fully visible
    } else {
        const offset = Math.max(0, Math.min(1, (rect.bottom - windowHeight) / (rect.height + windowHeight)));
        content.style.opacity = 1 - offset; // Fade out when not fully visible
    }
});
