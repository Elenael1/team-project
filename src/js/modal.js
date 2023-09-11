document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('.cards');
  const modal = document.querySelector('.modal');

  cards.addEventListener('click', openModal);
  addEventListener("keydown", closeModalOnKey);

  function openModal(e) {
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
  }

  function closeModalBtn(e) {
    modal.style.left = '-150%';
    modal.style.transform = 'translate(-50%, 20%)';
    modal.style.transition = '0.5s';
  }

  function closeModalOnKey({ key, code }) {
    if (code === "Escape") {
      modal.style.left = '-150%';
      modal.style.transform = 'translate(-50%, 20%)';
      modal.style.transition = '0.5s';
    }
  }

  const closeBtn = document.querySelector('.closeBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModalBtn);
  }

  async function fetchModalEvents(id) {
    const API_KEY = 'PRUcOi43mY6d4bQ805bXjBE5odWt60Qq';
    const API_URL = `https://app.ticketmaster.com/discovery/v2/events/${id}.json`;
    const data = await fetch(`${API_URL}?apikey=${API_KEY}`).then(response => {
      return response.json();
    });
    createModal(data);
    console.log(`https://app.ticketmaster.com${data._links.self.href}&apikey=${API_KEY}`);
    console.log(data._embedded.attractions[0].url);
    console.log(data);
  }

  function createModal({
    name,
    dates: { start, timezone },
    images,
    info,
    priceRanges,
    _embedded,
    url,
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
    <div class= 'modal__container'>
    <div class="modal__header">
    <img src="${images[0].url}" alt="pic circle" class="pic-circle" />
    <div class="close">
      <button class="closeBtn">
      <svg fill='#4C00FE' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </button>
    </div>
  </div>
  
  <div class="modal__content">
  <div class="modal-image">
    <img src="${images[0].url}" alt="pic poster" class="pic-poster" />
  </div>
  
  <div class="modal-texts">
    <div class="about">
      <p class="title__modal">INFO</p>
      <p class="text__modal">${info.length > 225 ? info.slice(0, 225) + '...' : info}</p>
    </div>

    <div class="about">
      <p class="title__modal">WHEN</p>
      <p class="text__modal">${start.localDate}</p>
      <p class="text__modal">${start.localTime} ${timezone}</p>
    </div>

    <div class="about">
      <p class="title__modal">WHERE</p>
      <p class="text__modal">${place}</p>
      <p class="text__modal">VDNH</p>
    </div>

    <div class="about">
      <p class="text__modal">WHO</p>
      <p class="text__modal">${name}</p>
    </div>

    <div class="about">
      <p class="title__modal">PRICES</p>
      <div class="buy-ticket">
        <div class="buy-tick-line">
       
<div class='barCodeDiv'>
        <svg class='barCode' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
        <p class="text__price">Standart ${minPrice}-${currencyP}</p>
</div>



         <a class="buy-tick-but" href="${_embedded.venues[0].url}">BUY TICKET</a>
        </div>
      </div>

      <div class="buy-ticket">
        <div class="buy-tick-line">


        <div class='barCodeDiv'>
        <svg class='barCode' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
        <p class="text__price">VIP ${maxPrice}-${currencyP}</p>
        </div>
          
          <a class="buy-tick-but" href="${_embedded.venues[0].url}">BUY TICKET</a>
        </div>
      </div>
    </div>

    
  </div>
</div>
<a class="more-but" href="${_embedded.attractions[0].url}">MORE FROM THIS AUTHOR</a>
</div>
`

      ;
   
    modal.innerHTML = markup;

    const closeBtn = document.querySelector('.closeBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModalBtn);
    }
  }

  function onClickCard(e) {
    if (e.target.closest('.card-item') === null) return;
    const dataId = e.target.closest('.card-item').dataset.id;
    fetchModalEvents(dataId);
  }

  cards.addEventListener('click', onClickCard);
});
