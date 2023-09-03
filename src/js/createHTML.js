const ul = document.querySelector('.cards');
const pag = document.querySelector('.pag_buttons');

function createHTML(eventData) {
  eventData.map(({ name, dates: { start }, images, id }) => {
    const place = eventData[0]?._embedded?.venues[0]?.name
      ? eventData[0]?._embedded?.venues[0]?.name
      : 'no info';
    const markup = `
    <div class='container'>
    <div class='cards'>
    <div class="hover-cards">
    <li class="card-item" data-id=${id}>
    <picture>
    <img class="card-image" src=${images[3].url} alt="" data-id=${id} loading="lazy">
    </picture>
    <div class="information">
    <p class='name' data-id=${id}>${name} </p>
    <p class='date'>${start.localDate}</p>
    <p class='local'><img src='../images/location.png' alt=''>${place}</p>
    </div>
    </li>
    </div>

    </div>
    </div> `;

    ul.insertAdjacentHTML('beforeend', markup);
  });
}

function notFound() {
  const p = `<p class="no-info">за вашим запитом нічого не знайдено </p>`;
  ul.innerHTML = '';
  // pag.innerHTML = '';

  ul.insertAdjacentHTML('beforeend', p);
}
export { createHTML, notFound };