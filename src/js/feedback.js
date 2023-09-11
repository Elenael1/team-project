import Notiflix from "notiflix";
import 'animate.css'

document.addEventListener('DOMContentLoaded', function () {
     const reactionButtons = document.querySelectorAll('.feedback-button-reaction');

     reactionButtons.forEach(button => {
          button.addEventListener('click', function () {
               Notiflix.Notify.success('Дякую!');
          });
     });

});
