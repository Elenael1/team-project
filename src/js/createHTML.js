const ul = document.querySelector('.cards');

function createHTML(eventData) {
    eventData.map(({ name, dates: { start }, images }) => {
        const markup = `
    <div class='container'>
    <div class='cards'>
    <div class="hover-cards">
    <li class="card-item">
    <img class="card-image" src=${images[0].url} alt="" loading="lazy">
    <div class="information">
    <p class='name'>${name}</p>
    <p class='date'>${start.localDate}</p
    </div>
    </li>
    </div>
    
    </div>  
    </div> ` 

        ul.insertAdjacentHTML("beforeend", markup);
    });
};


export { createHTML }














