import Notiflix from 'notiflix';
import clearCards from './clearCards';
import { createHTML, notFound } from './createHTML';

async function fetchEvents(country, name) {
  try {
    const API_KEY = 'PRUcOi43mY6d4bQ805bXjBE5odWt60Qq';
    const API_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
    const data = await fetch(
      `${API_URL}?countryCode=${country}&apikey=${API_KEY}&size=20&keyword=${name}`
    )
      .then(response => {
        // return response.json()
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(err => {
        if (err) {
          Notiflix.Notify.failure('nothing here');
        }
      });
    console.log(data);
    const eventData = data._embedded.events;
    createHTML(eventData);
  } catch (error) {
    if (
      error.message == "Cannot read properties of undefined (reading 'events')"
    ) {
      notFound();
    }
  }
}

// TypeError: Cannot read properties of undefined (reading 'events')

clearCards();

export default fetchEvents;

// Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'data._embedded.events')
