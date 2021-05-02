let display = document.getElementById('display')
let buttons = document.querySelectorAll('.number')
let initialValue = 0;

function handleClick(event){
    if(event.target.classList.contains('equal')){
        display.innerText = eval(display.innerText);
        return;
    }
    if(event.target.classList.contains("clear")){
        display.innerText = initialValue;
        return;
    }
    if(display.innerText == initialValue){
        display.innerText = event.target.innerText;
    }
    else{

        display.innerText += event.target.innerText;
    }
}

buttons.forEach((elem) => {
    elem.addEventListener("click", handleClick)
})
display.innerText = initialValue





