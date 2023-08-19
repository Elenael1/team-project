import clearCards from "./clearCards";
import { createHTML } from "./createHTML";

const pages = 29;

async function fetchEvents(name,country) {
    const API_KEY = "PRUcOi43mY6d4bQ805bXjBE5odWt60Qq";
    const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
    const data = await fetch(`${API_URL}?countryCode=${country}&apikey=${API_KEY}&page=${pages}&limit=10&keyword=${name}`)
        .then((response) => {response.json()
    });

    const eventData = data._embedded.events;
    createHTML(eventData);
}


 clearCards() 


export default fetchEvents;
