export default function changeNav () {
    const x = document.querySelector('nav');
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}