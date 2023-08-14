import { createHTML } from "./createHTML";

const ul = document.querySelector('.cards');
const buttons = document.querySelector('.pag_buttons');
const totalPages = 29;

let currentPage = 1;

function fetchEvents(page) {
    return fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=PRUcOi43mY6d4bQ805bXjBE5odWt60Qq&page=${page}`
    ).then((response) => response.json());
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
    ul.innerHTML = "";
    const data = await fetchEvents(page);
    const eventData = data._embedded.events;
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

