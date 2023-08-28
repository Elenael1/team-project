const cards = document.querySelector('.cards');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const blur = document.querySelector('.blur');

cards.addEventListener('click', openModal);
close.addEventListener('click', closeModalBtn)
addEventListener("keydown", closeModalOnKey);

function openModal (e){
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
    document.querySelector('.modal-overlay').style.display = 'block';
}

function closeModalBtn (e){
    modal.style.left = '150%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
    document.querySelector('.modal-overlay').style.display = 'none';
}

function closeModalOnKey({key, code}){
    if(code === "Escape"){
        modal.style.left = '200%';
        modal.style.transform = 'translate(-50%, 20%)';
        modal.style.transition = '0.3s';
        document.querySelector('.modal-overlay').style.display = 'none';

    }
}