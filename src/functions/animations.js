export function animateNav () {
    const section = document.querySelectorAll('.section');
    const nav = document.querySelectorAll('nav a');
    section.forEach(i => { // get data for each page
        const top = window.scrollY; // num pixels scrolled vertically
        const offset = i.offsetTop - 150; // height of page from top of viewport, -150 to animate a bit before each page begins
        const height = i.offsetHeight; // height of each page
        const id = i.getAttribute('id');

        if (top >= offset && top < offset + height) {
        nav.forEach(link => {
            link.classList.remove('active');
            document.querySelector('nav a[href*=' + id + ']').classList.add('active');
        });
        }
    });
}

export function fadeArrow () {
    const arrow = document.querySelector('.arrow');
    const top = window.scrollY; // num pixels scrolled vertically
    arrow.style.setProperty('opacity', "calc(1 - " + top + " / 400)"); // fades as screen scrolls down       
}

export function reveal() {
    const reveal = document.querySelectorAll(".reveal");
    reveal.forEach(i => {
        const windowHeight = window.innerHeight; // viewport height
        const top = i.getBoundingClientRect().top; // height of page from top of viewport
        const offset = windowHeight - 150; // height of viewport, -150 to animate a bit before each page begins
        if (top < offset) {
            i.classList.add('active');
        } else {
            i.classList.remove('active');
        }
    });
}