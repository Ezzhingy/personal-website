export function showModal () {
    const span = document.getElementsByClassName("close")[0];

    const kumonInfo = document.querySelector('#kumon');
    const ignitionInfo = document.querySelector('#ignition')
    const shadInfo = document.querySelector('#shad');

    kumonInfo.addEventListener('click', addKumon);
    ignitionInfo.addEventListener('click', addIgnition);
    shadInfo.addEventListener('click', addShad);

    span.addEventListener('click', closeModal);
    window.addEventListener('click', closeModalW);
    
}

function closeModalW (e) {
    const modal = document.querySelector('.modal');
    if (e.target === modal) {
        const body = document.querySelector('body');
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
}

function closeModal () {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    body.style.overflow = 'auto';
}

function addKumon () {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    const pTitle = document.querySelector('.info-title');
    const pInfo = document.querySelector('.info');
    pTitle.innerText = 'Kumon Institute Education Co. Ltd.';
    pInfo.innerText = 'I worked at Kumon as a Teaching Assistant from 2019 to 2022. This opportunity opened my eyes to the beauty of learning and improved how I convey my thinking to others. Furthermore, my teaching experience highlighted the importance of collaboration and I learned how to communicate effectively with students and assistants.';
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}

function addIgnition () {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    const pTitle = document.querySelector('.info-title');
    const pInfo = document.querySelector('.info');
    pTitle.innerText = 'Ignition Hacks 2021';
    pInfo.innerText = 'During the pandemic, I noticed a decrease in learning for students in my region and the impact the pandemic had on student motivation. These factors fueled my ambition to organize Ignition Hacks as the Co-President in the summer of 2021. It was a very memorable and impactful experience and I was exposed to a ton of different students with varying programming backgrounds. Although the pandemic has caused numerous problems worldwide,  it helped me develop a stronger work ethic and facilitated my exposure to the wonders of technology.';
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}

function addShad () {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    const pTitle = document.querySelector('.info-title');
    const pInfo = document.querySelector('.info');
    pTitle.innerText = 'SHAD 2021';
    pInfo.innerText = 'In the summer of 2021, I learned how to become a leader that values inclusivity, diversity, and differing perspectives. By the end of the program, my team and I created a product that increases sustainability and efficiency for Canadian homeowners in all communities. To aid homeowners in cutting down on their freshwater usage and to encourage the recycling of greywater, we prototyped a holistic smart irrigation system, Hydrain, that allows for a more efficient way to reuse greywater. By our estimates, Hydrain would grant the average Canadian homeowner an extra $100 every year while also increasing the user’s water efficiency and ultimately helping Canadians treat freshwaters with more respect.';
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}