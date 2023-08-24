const cards = document.querySelector('.cards');
const modal = document.querySelector('.modal')

cards.addEventListener('click', modalClick);

function modalClick (e){
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
}