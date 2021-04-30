let btn = document.querySelector('.banner');
btn.addEventListener('click',firstOne);

function firstOne(){
    let first = document.querySelector('.first')
    first.style.backgroundColor = `rgb(`+ Math.round(Math.random() * 255) + `,` +
                                    Math.round(Math.random() * 255) +  `,` +
                                    Math.round(Math.random() * 255) +`)`;
}

let btnMouse = document.querySelector('.banner2');
btnMouse.addEventListener('mouseover',secondOne);

function secondOne(){
    let second = document.querySelector('.second');
    second.style.backgroundColor = `rgb(`+ Math.round(Math.random() * 255) + `,` +
                                    Math.round(Math.random() * 255) +  `,` +
                                    Math.round(Math.random() * 255) +`)`;
}

