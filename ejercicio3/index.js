// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
for (let c of countries) {
    const liCountries = document.createElement('li');
    liCountries.textContent = c;
    ulCountries.appendChild(liCountries);
}
document.body.appendChild(ulCountries);

// 1.2
document.body.removeChild(document.querySelector('.fn-remove-me'));

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulCars = document.createElement('ul');
for (let c of cars) {
    const liCars = document.createElement('li');
    liCars.textContent = c;
    liCars.setAttribute('data-function', 'printHere');
    ulCars.appendChild(liCars);
}
document.body.appendChild(ulCars);

// 1.4
const countries2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (let c of countries2) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('countries')
    newDiv.innerHTML = `<h4>${c.title}</h4><img src='${c.imgUrl}' alt='Img'>`;
    document.body.appendChild(newDiv);
}

// 1.5
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Borrar ultimo pais'
deleteButton.addEventListener('click', () => {
    const countriesDivs = document.querySelectorAll('.countries');
    if (countriesDivs.length >= 1) {
        document.body.removeChild(countriesDivs[countriesDivs.length - 1])
    }
    if(countriesDivs.length = 1){
        document.body.removeChild(deleteButton);
    }
})
document.body.appendChild(deleteButton);

// 1.6
const divsCountries = document.querySelectorAll('.countries');
for (let d of divsCountries) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar este div';
    deleteButton.addEventListener('click', () => {
        document.body.removeChild(d);
    })
    d.appendChild(deleteButton);
}