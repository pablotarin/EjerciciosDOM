const places = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const ulAlbums = document.createElement('ul');
for (let a of places) {
    const liAlbums = document.createElement('li');
    liAlbums.textContent = a;
    ulPlaces.appendChild(liAlbums);
}
document.body.appendChild(ulPlaces);