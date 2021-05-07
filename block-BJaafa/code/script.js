let key = document.querySelector('h2')
let description = document.querySelector('p')
let button = document.querySelector('button')

function generateRandomIndex(max){
    return Math.floor(Math.random() * max)
}

button.addEventListener('click', ()=> {
    let randomIndex = generateRandomIndex(linux.length);
    let randomShortcut = linux[randomIndex];
    key.innerHTML = randomShortcut.shortcut
    description.innerHTML = randomShortcut.description
})