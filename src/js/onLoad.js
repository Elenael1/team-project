import fetchEvents from "./request";

window.addEventListener("load", onLoad);

async function onLoad(e) {
    fetchEvents("US")
};

