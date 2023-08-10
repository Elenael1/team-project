import { createHTML } from "./createHTML";

const ul = document.querySelector('.cards')
async function fetchEvents(page) {
    const data = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=PRUcOi43mY6d4bQ805bXjBE5odWt60Qq&
        page=${page}`
    ).then((responce)=>{
        return responce.json();
    });
    const eventData = data._embedded.events;
    createHTML(eventData)
    
}


const buttons = document.querySelector('.pag_buttons');

buttons.addEventListener('click', pagination)

function pagination(e) {
    ul.innerHTML = "";
    if (e.target.nodeName !== "BUTTON") return;
    fetchEvents(e.target.textContent)
   
 }




  
  
  





