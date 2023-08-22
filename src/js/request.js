import Notiflix from "notiflix";
import clearCards from "./clearCards";
import { createHTML } from "./createHTML";


async function fetchEvents(country, name) {
    const API_KEY = "PRUcOi43mY6d4bQ805bXjBE5odWt60Qq";
    const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
    const data = await fetch(`${API_URL}?countryCode=${country}&apikey=${API_KEY}&size=20&keyword=${name}`)
    .then((response) => {
        // return response.json()
        if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
      
    }).catch(err => {
        console.log(err);
        if (err) {
            Notiflix.Notify.failure('nothing here')
        }
    });
    const eventData = data._embedded.events;
    console.log(eventData);
    createHTML(eventData);
}


clearCards() 


export default fetchEvents;

// Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'data._embedded.events')
