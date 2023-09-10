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
        <svg
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.524770z"
          ></path>
        </svg>
        <span class="modal__back">Back</span>
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
      <p class="text__modal">${info.length > 250 ? info.slice(0, 250) + '...' : info}</p>
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
          <p class="text__price">Standart ${minPrice}-${currencyP}</p>
          <a class="buy-tick-but" href="${_embedded.venues[0].url}">BUY TICKET</a>
        </div>
      </div>

      <div class="buy-ticket">
        <div class="buy-tick-line">
          <p class="text__price">VIP ${maxPrice}-${currencyP}</p>
          <a class="buy-tick-but" href="${_embedded.venues[0].url}">BUY TICKET</a>
        </div>
      </div>
    </div>

    
  </div>
</div>
<a class="more-but" href="${_embedded.attractions[0].url}">MORE FROM THIS AUTHOR</a>
</div>
`
const truncatedInfo = info.length > 50 ? info.slice(0, 50) + '...' : info;
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
