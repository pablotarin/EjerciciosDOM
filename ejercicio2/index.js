// 1.1
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

// 1.2
const newDivP = document.createElement('div');
const newP = document.createElement('p');
newDivP.appendChild(newP);
document.body.appendChild(newDivP);

// 1.3
const newDiv6p = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    newDiv6p.appendChild(p);
}
document.body.appendChild(newDiv6p);

// 1.4
const p = document.createElement('p');
p.textContent = 'Soy dinámico!';
document.body.appendChild(p);

// 1.5
document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub';

// 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (let a of apps) {
    const li = document.createElement('li');
    li.textContent = a;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 1.7
const nodeList = document.querySelectorAll('.fn-remove-me');
for (let n of nodeList) {
    document.body.removeChild(n);
}

// 1.8
const middleP = document.createElement('p');
middleP.textContent = 'Voy en medio!';
const segundoDiv = document.querySelector('div + div');
segundoDiv.parentNode.insertBefore(middleP, segundoDiv);

// 1.9
const divs = document.body.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
    const inP = document.createElement('p');
    inP.textContent = 'Voy dentro!';
    divs[i].appendChild(inP);
}