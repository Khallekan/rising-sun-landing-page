const show = document.getElementById('show');
const menu = document.getElementById('menu');

const voila = () => {
    menu.classList.toggle('hidden');
}

show.addEventListener('click', voila)