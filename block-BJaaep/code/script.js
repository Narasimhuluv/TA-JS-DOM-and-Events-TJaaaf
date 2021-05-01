let firstBoxes = document.querySelectorAll('li')

firstBoxes.forEach((elem, index) => {
    elem.addEventListener("click", (event) => {
        event.target.innerText = index +  1;
        setTimeout(() => {
            event.target.innerText = ""
        }, 5000)
    });
} );



let secondBox = document.querySelector('.second');
secondBox.addEventListener("click",(event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(() => {
        event.target.innerText = ""
    }, 5000)

})


// let firstBoxes = document.querySelectorAll('li')

// firstBoxes.forEach((element, index) => {
//     element.addEventListener("click", (me) => {
//         console.dir(event);
//       me.target.innerText = index + 1;

//       setTimeout(() => {
//           me.target.innerText = "";
//       },5000)
//     })
// })