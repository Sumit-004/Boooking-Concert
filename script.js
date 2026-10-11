const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const citiesBtn = document.getElementById('cities-btn');
const citiesList = document.getElementById('cities-list');
const citiesIcon = document.getElementById('cities-icon');

function setMenu() {
    menu.classList.toggle('hidden');
}

menuBtn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));

citiesBtn.addEventListener('click', () => {
    const open = citiesList.classList.toggle('hidden') === false;
    citiesList.classList.toggle('flex', open);
    citiesIcon.classList.toggle('rotate-180', open);
});
