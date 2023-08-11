import { debounce } from 'debounce';
import Notiflix from "notiflix";

const API_KEY = "PRUcOi43mY6d4bQ805bXjBE5odWt60Qq";
const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

const refs = {
    input: document.querySelector('.search__input'),
    button: document.querySelector('.search-button'),
}

refs.input.addEventListener('input', debounce(onInput, 300))

function onInput(e) {
    const value = e.target.value.trim();
    if (value === '') {
        Notiflix.Notify.info('Enter something');
        return;
    }
}

let page = 1;
let name = '';

async function fetch(name, page) {
    try {
      const fetch = await axios.get(
        `${API_URL}?key=${API_KEY}&page=${page}`
      );
      const response = fetch.data;
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

// refs.input.addEventListener('input', debounce(onInput, 300));
// refs.button.addEventListener('click', onClick);
  


// async function onClick(e) {
//     const value = refs.input.value.trim();
//     page += 1;
  
//     const data = await fetch(value, page);
  
//     const images = data.total - page * 5;
//   }


//   createHTML()