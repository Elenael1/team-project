const cards = document.querySelector('.cards');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const overlay = document.querySelector('.modal-overlay');

cards.addEventListener('click', openModal);
close.addEventListener('click', closeModalBtn)
addEventListener("keydown", closeModalOnKey);
overlay.addEventListener('click', closeModalOnOverlay)

function openModal (e){
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.3s';
    overlay.style.display = 'block';
}
function closeModalBtn (e){
    modal.style.left = '200%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.3s';
    overlay.style.display = 'none';
}
function closeModalOnKey({key, code}){
    if(code === "Escape"){
        modal.style.left = '200%';
        modal.style.transform = 'translate(-50%, 20%)';
        modal.style.transition = '0.3s';
        overlay.style.display = 'none';
    }
}
function closeModalOnOverlay(e){
    modal.style.left = '200%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.3s';
    overlay.style.display = 'none';
}