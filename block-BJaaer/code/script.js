let output = document.querySelector('.output')
let form = document.querySelector('form')

let userInfo = {};

function handleInputs(event){
    event.preventDefault();
    userInfo.Name = form.elements.name.value;
    userInfo.mail = form.elements.email.value;
    userInfo.movies = form.elements.gender.value;
    userInfo.color = form.elements.color.value;
    userInfo.range =form.elements.range.value;
    userInfo.drone = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked
    console.log(userInfo)
    display();


}

form.addEventListener('submit', handleInputs)


function display(){
    let outputInside = document.createElement('div')
    outputInside.classList.add('outputInside')


   let name = document.createElement('h2');
   name.classList.add('name')
   name.innerHTML = `Your Name :   ${userInfo.Name}`

   let email = document.createElement('h2');
   email.classList.add('email')
   email.innerText = `Your Email :   ${userInfo.mail}`


   let favoriteMovies = document.createElement('h2')
   favoriteMovies.classList.add('favoriteMovies')
   favoriteMovies.innerHTML = `favoriteMovie :   ${userInfo.movies}`
   
   let color = document.createElement('h2')
   color.classList.add('favoriteMovies')
   color.innerHTML = `color :   ${userInfo.color}`


   let range  = document.createElement('h2')
   range.classList.add('range')
   range.innerHTML = `Range : ${userInfo.range}`

   let drone = document.createElement('h2')
   drone.classList.add('drone')
   drone.innerHTML = `drone :   ${userInfo.drone}`

   let terms = document.createElement('h2')
   terms.classList.add('terms')
   terms.innerText = `Terms & Conditions :   ${userInfo.terms}`

   let icon = document.createElement('i')
   icon.className = `fas fa-times`
   icon.classList.add('icon')

    output.append(outputInside)
   outputInside.append(name,email,favoriteMovies,color, range,drone,terms);
   outputInside.prepend(icon)
}


// function cross(){
//     let cross = document.querySelector('.icon')
//     cross.addEventListener('click', (event) => {
//         event.target.output = ""
//     })
// }
// cross();