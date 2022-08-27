import eugenePic from '../images/eugene-pic.jpg';
import kumon from '../images/Kumon.jpeg';
import ignition from '../images/ignition.jpeg';
import shad from '../images/SHAD.png';

export function loadMe () {
    const meBox = document.querySelector('.me');
    const eugenePicElement = document.createElement('img');
    eugenePicElement.src = eugenePic;
    eugenePicElement.alt = "Picture of Eugene Zhang";
    meBox.appendChild(eugenePicElement);
}

export function loadExp () {
    const kumonBox = document.querySelector('#kumon-img');
    const ignitionBox = document.querySelector('#ignition-img');
    const shadBox = document.querySelector('#shad-img');

    const kumonImg = document.createElement('img');
    kumonImg.classList.add('kumon');
    kumonImg.src = kumon;
    kumonImg.alt = 'Kumon Logo';

    const ignitionImg = document.createElement('img');
    ignitionImg.classList.add('ignition');
    ignitionImg.src = ignition;
    ignitionImg.alt = 'Ignition Hacks 2021 Logo';

    const shadImg = document.createElement('img');
    shadImg.classList.add('shad');
    shadImg.src = shad;
    shadImg.alt = 'SHAD 2021 Logo';

    kumonBox.appendChild(kumonImg);
    ignitionBox.appendChild(ignitionImg);
    shadBox.appendChild(shadImg);
}