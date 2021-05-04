let form = document.querySelector('form');
let usernameError = "";
function doesContainNumber(string){
    return string.split("").some(e => Number(e))
}
function handleSubmit(){
    event.preventDefault();
    console.log(event.target);

    let usernameElem = event.target.elements.userName;
    if(usernameElem.value === ""){
        usernameError = "cant be empty";
        parentElm.classList.add("error")
    }else if(usernameElem.value.length < 5){
        usernameError = "Cant be less than five characters"
        parentElm.classList.add("error")
    }else if(doesContainNumber(usernameElem.value)){
        usernameError = "Must contain at least one number"
        parentElm.classList.add("error")
    }else{
        usernameError = "";
        parentElm.classList.add("sucess")
        parentElm.classList.add("error")
    }
usernameElem.nextElementSibling.innerText = usernameElem;
}
form.addEventListener('submit',handleSubmit)