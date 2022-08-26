export default function animateNav () {
    const section = document.querySelectorAll('.section');
    const nav = document.querySelectorAll('nav a');
    window.onscroll = () => {
        section.forEach(i => {
          const top = window.scrollY;
          const offset = i.offsetTop - 150;
          const height = i.offsetHeight;
          const id = i.getAttribute('id');

          if (top >= offset && top < offset + height) {
            nav.forEach(link => {
                link.classList.remove('active');
              document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
          }
        });
    };
}