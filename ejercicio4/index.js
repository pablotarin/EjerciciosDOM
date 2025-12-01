// 1.1
const btnClick = document.createElement('button');
btnClick.classList.add('btnToClick');
btnClick.textContent = 'Console evento';
btnClick.addEventListener('click', (ev) => {
    console.log(ev);
})
document.body.appendChild(btnClick);

// 1.2
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (ev) => {
    console.log(ev);
})

// 1.3
const eventInput = document.querySelector('.value');
eventInput.addEventListener('input', (ev) => {
    console.log(ev);
})
