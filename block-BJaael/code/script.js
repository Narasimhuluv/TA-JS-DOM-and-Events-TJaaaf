function getRandomNumber(max){
    return Math.floor(Math.random * max)
}

function generateRandomColor(){
    let hexaCharacters = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let color = "#";
    for(let i=0; i<6; i++){
        let randomNumber = getRandomNumber(16);
        color = color + hexaCharacters[randomNumber]
    }
    return color
}

let allBoxes = document.querySelector(".boxes")


for(let i=0; i<500; i++){
    let div = document.createElement('div');
    div.classList.add('box')
    let h3   = document.createElement('h3');
    let randomNo = getRandomNumber(500);
    h3.innerText = randomNo

    div.append(h3);
    allBoxes.append(div)

}

let eachbox = document.querySelector('.box');
function handleMouseMove(){
    eachbox.forEach((elem) => {
        elem.style.backgroundColor = generateRandomColor;
        elem.querySelector("h3").innerText = getRandomNumber(500);
    })
}

allBoxes.addEventListener("mousemove", handleMouseMove);