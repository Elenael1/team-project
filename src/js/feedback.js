import Notiflix from "notiflix";

document.addEventListener('DOMContentLoaded', function () {
     const reactionButtons = document.querySelectorAll('.feedback-button-reaction');
     const modalComment = document.querySelector('.card_comment');
     const closeModalButton = document.querySelector('.close-modal-button');



     reactionButtons.forEach(button => {
          button.addEventListener('click', function () {

               modalComment.style.display = 'block';

               const overlayComment = document.querySelector('.overlay_comment');
               overlayComment.style.display = 'block';
               overlayComment.style.backdropFilter = 'blur(10px)';
               overlayComment.style.transition = '0.5s';



          });
     });

     closeModalButton.addEventListener('click', function () {

          const formInputs = form.querySelectorAll('input, textarea');
          formInputs.forEach(input => {
               input.value = ''; 
          });

          modalComment.style.display = 'none';
          modalComment.style.transition = '0.5s';

          const overlayComment = document.querySelector('.overlay_comment');
          overlayComment.style.display = 'none';
          overlayComment.style.backdropFilter = 'none';
          overlayComment.style.transition = '0.5s';

     });

     const form = modalComment.querySelector('.form');
     form.addEventListener('submit', function (e) {
          e.preventDefault();
          const formInputs = form.querySelectorAll('input, textarea');
          formInputs.forEach(input => {
               input.value = ''; 
          });

          modalComment.style.display = 'none';
          document.body.style.overflow = 'auto';
Notiflix.Notify.success('Дякую!')
          const overlayComment = document.querySelector('.overlay_comment');
          overlayComment.style.display = 'none';
          overlayComment.style.backdropFilter = 'none';
          overlayComment.style.transition = '0.5s';

     });
});
