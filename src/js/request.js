import { createHTML } from "./createHTML";

const API_KEY = "PRUcOi43mY6d4bQ805bXjBE5odWt60Qq";
const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

const pages = 1;

window.addEventListener('load', onLoad)
async function onLoad() {
    const data = await fetch(`${API_URL}?countryCode=US&apikey=${API_KEY}&page=${pages}&limit=10`)
    .then((responce)=>{
        return responce.json();
    });
    const eventData = data._embedded.events;
    createHTML(eventData)
}

onLoad()