const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const div = document.querySelector('.print-here');
const ulPlaces = document.createElement('ul');
for (let p of places) {
    const liPlaces = document.createElement('li');
    liPlaces.textContent = p;
    ulPlaces.appendChild(liPlaces);
}
document.body.appendChild(ulPlaces);