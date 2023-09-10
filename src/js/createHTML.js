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
  const gameMarkup = `
  <div class='err animate__bounceIn'>
  <svg class='err__svg' height="180" viewBox="0 0 24 24" width="180" xmlns="http://www.w3.org/2000/svg"><path d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z" fill="#EF665B"></path></svg>
<p class='notFound__404'>404</p> 
<p class='notFound'>Not Found</p>
</div>`;
  ul.innerHTML = '';
  ul.insertAdjacentHTML('beforeend', gameMarkup);

  

  document.addEventListener('click', handleDocumentClick);

 function handleDocumentClick(event) {
  if (event.target.classList.contains('no-info')) {
    event.preventDefault();
    event.stopPropagation();
  }



}}
 
export { createHTML, notFound };

