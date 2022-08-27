import eugenePic from '../images/eugene-pic.jpg';

export function loadMe () {
    const meBox = document.querySelector('.me');
    const eugenePicElement = document.createElement('img');
    eugenePicElement.src = eugenePic;
    eugenePicElement.alt = "Picture of Eugene Zhang";
    meBox.appendChild(eugenePicElement);
}