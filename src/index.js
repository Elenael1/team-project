const API_KEY = "PRUcOi43mY6d4bQ805bXjBE5odWt60Qq";
const API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

const pages = 0;

const url = `${API_URL}?countryCode=US&apikey=${API_KEY}&page=${pages}`;

async function getData() {
    const responce = await fetch(url)
    const data = responce.json()
    console.log(data);
}
getData()

    

