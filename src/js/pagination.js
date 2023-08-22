import { createHTML } from "./createHTML";


const ul = document.querySelector('.cards');
const buttons = document.querySelector('.pag_buttons');
const totalPages = 29;
const country= document.querySelector('.location_input')
const name = document.querySelector('.name_input')

let currentPage = 1;
 
function fetchEventss(page, value_country, value_name) {
    return fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${value_country}&apikey=PRUcOi43mY6d4bQ805bXjBE5odWt60Qq&page=${page}&keyword=${value_name}`
    ).then((response) => response.json()).catch(err => {
        console.log(err);
        if (err ) {
            Notiflix.Notify.failure('nothing here')
        }
    });
}

function createPaginationButtons(currentPage) {
    const maxButtons = 5;
    const halfMaxButtons = Math.floor(maxButtons / 2);
    const startPage = Math.max(currentPage - halfMaxButtons, 1);
    const endPage = Math.min(startPage + maxButtons - 1, totalPages);

    let paginationHTML = '';

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `<button class="click ${i === currentPage ? 'active' : ''}">${i}</button>`;
    }

    if (endPage < totalPages) {
        paginationHTML += '<button class="click">...</button>';
        paginationHTML += `<button class="click">${totalPages}</button>`;
    }

    buttons.innerHTML = paginationHTML;
}

async function updatePage(page) {
    const value_country = country.value.trim();
    const value_name = name.value.trim();
    ul.innerHTML = "";
    const data = await fetchEventss(page, value_country, value_name);
    const eventData = data._embedded.events;
    console.log(eventData);
    createHTML(eventData);
}

function pagination(e) {
    if (e.target.nodeName !== "BUTTON") 
    return;
    currentPage = parseInt(e.target.textContent);
    updatePage(currentPage);
    createPaginationButtons(currentPage);
    console.log();
}

buttons.addEventListener('click', pagination);

// const API_KEY = "PRUcOi43mY6d4bQ805bXjBE5odWt60Qq";
//     const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
//     const data = await fetch(`${API_URL}?countryCode=${country}&apikey=${API_KEY}&size=20&keyword=${name}`)
//     .then((response) => {
//         return response.json()
//     });