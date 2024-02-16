let openmain = document.getElementById('open');
let closemain = document.getElementById('close');
let mainMenu = document.getElementById('main-menu');



openmain.onclick = () => {

    mainMenu.classList.add('menu-open');
}


closemain.onclick = () => {

    mainMenu.classList.remove('menu-open');
}