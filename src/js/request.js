import clearCards from "./clearCards";
import { createHTML } from "./createHTML";


async function fetchEvents(name,country) {
    const API_KEY = "PRUcOi43mY6d4bQ805bXjBE5odWt60Qq";
    const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
    const data = await fetch(`${API_URL}?keyword=${name}&countryCode=${country}&apikey=${API_KEY}&size=20`)
        .then((response) => {response.json()
    });

    const eventData = data._embedded.events;
    createHTML(eventData);
}


 clearCards() 


export default fetchEvents;

