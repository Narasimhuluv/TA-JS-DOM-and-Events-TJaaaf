let form = document.querySelector('form')
let ul = document.querySelector('ul')
function handledata(event){

    event.preventDefault();
    let elements = event.target.elements.enterMovie.value
    console.log(elements);
    movieName(elements)
    elements.innerText = "";
}

function movieName(elements){
    let div = document.createElement('div')
    div.classList.add('div')

    let check = document.createElement('input')
    check.classList.add('check')
    check.type = "checkbox"

    let li = document.createElement('li')
    li.classList.add('name')
    li.innerText = elements
    
    let i = document.createElement('img')
    i.classList.add('image')
    i.src =  "https://www.flaticon.com/svg/vstatic/svg/1828/1828666.svg?token=exp=1620109487~hmac=c68d8d6c4f93fef6a6ae0f91d3d012dd"
    i.addEventListener('click', ()=> {
        check.remove();
        li.remove();
        i.remove();
    })
    ul.append(div)
    div.append(check,li, i);
    
}
form.addEventListener('submit',handledata)