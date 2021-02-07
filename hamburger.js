const btn = document.querySelector('button');

const nav = document.querySelector('nav');


//add an event listener

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
    btn.classList.toggle('active')
})