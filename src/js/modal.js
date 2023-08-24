const cards = document.querySelector('.cards');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cards.addEventListener('click', openModal);
close.addEventListener('click', closeModalBtn)

function openModal (e){
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
}
function closeModalBtn (e){
    modal.style.left = '150%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
}
