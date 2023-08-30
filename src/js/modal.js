const cards = document.querySelector('.cards');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cards.addEventListener('click', openModal);
close.addEventListener('click', closeModalBtn)
addEventListener("keydown", closeModalOnKey);

function openModal (e){
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
}
function closeModalBtn (e){
    modal.style.left = '150%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
}
function closeModalOnKey({key, code}){
    if(code === "Escape"){
        modal.style.left = '150%';
        modal.style.transform = 'translate(-50%, 20%)';
        modal.style.transition = '0.5s';
    }
}

async function fetchModalEvents(id) {
  const API_KEY = 'PRUcOi43mY6d4bQ805bXjBE5odWt60Qq';
  const API_URL = `https://app.ticketmaster.com/discovery/v2/events/${id}.json`;
  const data = await fetch(`${API_URL}?apikey=${API_KEY}`).then(response => {
    return response.json();
  });
  createModal(data);
}

function createModal({
  name,
  dates: { start, timezone },
  images,
  info,
  priceRanges,
  _embedded,
}) {
  const place = _embedded?.venues[0]?.name
    ? _embedded?.venues[0]?.name
    : 'no info';
  let minPrice = priceRanges ? priceRanges[0].min : '-';
  let maxPrice = priceRanges ? priceRanges[0].max : '-';
  let currencyP = priceRanges ? priceRanges[0].currency : '-';

  if (info == null) {
    info = 'no information';
  }
  if (start.localDate === undefined) {
    start.localDate = 'no information';
  }
  if (start.localTime === undefined) {
    start.localTime = 'no information';
  }
  if (minPrice === undefined) {
    minPrice = '-';
  }
  if (maxPrice === undefined) {
    maxPrice = '-';
  }
  if (currencyP === undefined) {
    currencyP = '-';
  }

 const markup = `
 <img src="/src/images/pic circle.png" alt="pic circle" class="pic-circle">
    <img src="/src/images/close.png" alt="close button" class="close">
 <img src="${images[0].url}" alt="pic circle" class="pic-circle" />
<div class="modal-block">
    <img src="${images[0].url}" alt="pic poster" class="pic-poster" />
    <div class="modal-texts">
      <div class="about">
        <p class="title">INFO</p>
        <p class="text">
         ${info}
        </p>
      </div>
      <div class="about">
        <p class="title">WHEN</p>
        <p class="text">${start.localDate}</p>
        <p class="text">${start.localTime} ${timezone}</p>
      </div>
      <div class="about">
        <p class="title">WHERE</p>
        <p class="text">${place}</p>
        <p class="text">VDNH</p>
      </div>
      <div class="about">
        <p class="title">WHO</p>
        <p class="text">${name}</p>
      </div>
      <div class="about">
        <p class="title">PRICES</p>
        <div class="buy-tick">
          <div class="buy-tick-line">
            <img src="/src/images/ticket.png" alt="ticket" class="ticket" />
            <p class="text">Standart ${minPrice} ${currencyP}/p>
          </div>
          <button class="buy-tick-but">BUY TICKET</button>
        </div>
        <div class="buy-tick">
          <div class="buy-tick-line">
            <img src="/src/images/ticket.png" alt="ticket" class="ticket" />
            <p class="text">VIP ${maxPrice} ${currencyP}</p>
          </div>
          <button class="buy-tick-but">BUY TICKET</button>
        </div>
      </div>
    </div>
  </div>
  <button class="more-but">MORE FROM THIS AUTHOR</button>
    `;
  modal.innerHTML = markup;
}


cards.addEventListener('click', onClickCard);

function onClickCard(e) {
  // console.log(!e.target.closest('.card-item').dataset.id);
  if (e.target.closest('.card-item') === null) return;
  const dataId = e.target.closest('.card-item').dataset.id;
  fetchModalEvents(dataId);
}
