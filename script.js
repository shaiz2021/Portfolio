const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
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

const sr = ScrollReveal ({
    distance: '25px',
    duration: 1500,
    reset: true
})

sr.reveal('.home-text', {delay:550, origin: 'bottom'})

sr.reveal('.about, .services, .projects, .contact', {delay:100, origin: 'bottom'})
