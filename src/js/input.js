import { debounce } from 'debounce';
import Notiflix from "notiflix";
// import fetchEvents from './request';
import onLoad from "./request";

const refs = {
    country: document.querySelector('.location_input'),
    name: document.querySelector('.name_input'),
    search: document.querySelector('.search'),
    button: document.querySelector('.search-button'),
    cards: document.querySelector(".cards")
}

refs.search.addEventListener('input', debounce(inputContent, 300))

function inputContent(e) {
    if (e.target.nodeName!=="INPUT") return;
    const country = refs.country.value.trim();
    const name = refs.name.value.trim();
    refs.cards.innerHTML=" ";
    onLoad(name,country);
    const value = e.target.value.trim();

}

refs.search.addEventListener('input', debounce(onInput, 300))

function onInput(e) {
    const value = e.target.value.trim();
    console.log(value);
    if (value === '') {
        Notiflix.Notify.info('Enter something');
        return;
    }
}
