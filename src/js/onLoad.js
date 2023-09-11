import fetchEvents from "./request";

window.addEventListener("load", onLoad);

async function onLoad(e) {
    fetchEvents("US")
};

document.querySelector('.header').addEventListener('mouseover', function() {
    this.classList.add('animate__animated', 'animate__fadeIn');
  });
