// let btn = document.querySelector('.banner');
// btn.addEventListener('click',firstOne);

// function firstOne(){
//     let first = document.querySelector('.first')
//     first.style.backgroundColor = `rgb(`+ Math.round(Math.random() * 255) + `,` +
//                                     Math.round(Math.random() * 255) +  `,` +
//                                     Math.round(Math.random() * 255) +`)`;
// }

// let btnMouse = document.querySelector('.banner2');
// btnMouse.addEventListener('mouseover',secondOne);

// function secondOne(){
//     let second = document.querySelector('.second');
//     second.style.backgroundColor = `rgb(`+ Math.round(Math.random() * 255) + `,` +
//                                     Math.round(Math.random() * 255) +  `,` +
//                                     Math.round(Math.random() * 255) +`)`;
// }

let boxOne = document.querySelector('.first')
let boxTwo = document.querySelector('.second')
boxOne.addEventListener('click',handleClick)
boxTwo.addEventListener('mouseover', handleMouse)

function generateRandomColor(){
    let hexaColors = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let color = "#";
    for(let i=0; i<6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexaColors[randomNumber]
    }
    return color
}

function handleClick(){
    let random =  generateRandomColor();
    boxOne.style.backgroundColor = random;
}
function handleMouse(){
    let random =  generateRandomColor();
    boxOne.style.backgroundColor = random;
}
console.log(generateRandomColor)


