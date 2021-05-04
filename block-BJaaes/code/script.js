let form = document.querySelector('form')
let userInfo = {};
let errorMessage = {}

function displayError(name){
    let elm = form.elements[name];
    elm.nextElementSiblin.innerText = errorMessage[name]
    elm.parentElement.classList.add("error")
}

function displaySuccess(name){
    let elm = form.elements[name];
    elm.nextElementSiblin.innerText = "";
    errorMessage[name] = ""
    elm.parentElement.classList.remove("error")
    elm.parentElement.classList.add("success")
}

function handleInputs(event){
    event.preventDefault();
    let elements = event.target.elements;
    const username = elements.userName.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    // const passwordCheck = elements['password-check'].value;
    // console.log({username,name,email,phone,password})


//     Username can't be less than 4 characters
    if(username.length <= 4){
        errorMessage.username = "username can't be less than 4 characters"
        displayError("username")
    }else{
        displaySuccess("username")
    }
//     Name can't be numbers
    // Email must contain the symbol @
    // Email must be at least 6 characters
    // Phone numbers can only be a number
    // Length of phone number can't be less than 7
    // Password and confirm password must be same.
}
form.addEventListener('submit',handleInputs)