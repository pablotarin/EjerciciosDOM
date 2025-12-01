const places = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const ulAlbums = document.createElement('ul');
for (const a of places) {
    const liAlbums = document.createElement('li');
    liAlbums.textContent = a;
    ulAlbums.appendChild(liAlbums);
}
document.body.appendChild(ulAlbums);