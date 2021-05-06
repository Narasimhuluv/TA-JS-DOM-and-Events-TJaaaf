for(let i=0; i<=11 ; i++){
    let allButtons = document.querySelector('.buttons')
    let eachbtn = document.createElement('button')
    eachbtn.classList.add('eachbtn')
    eachbtn.innerHTML = "submit"
    allButtons.append(eachbtn)
}






got.houses.forEach((elem) => {
    elem.people.forEach((peo) => {
        let main = document.querySelector('.main');

        let article = document.createElement('article')
        article.classList.add('article')

        let img = document.createElement('img')
        img.src = peo.image
        img.classList.add('image')

        let name = document.createElement('h2')
        name.innerHTML = peo.name
        name.classList.add('nameOfGot')


        let desc = document.createElement('p')
        desc.innerHTML = peo.description
        desc.classList.add('description')

        let wiki = document.createElement('a')
        wiki.href = peo.wikiLink
        wiki.innerHTML  = "Know More"
        wiki.classList.add('wiki')

        main.append(article)
        article.append(img,name,desc,wiki)

        let inputserach = document.getElementById('text')
        let display = document.querySelector('.display')

        inputserach.addEventListener('keyup', (event) => {
            
            got.houses.forEach((elem) => {
                elem.people.forEach((peo) => {
                    if(peo.name.includes("Stark")){
                        display.style.display = "block"
                        console.log(event)
                    }
                    
                })
               

                
            })
            event.target.value = ""
        })

        


    })
})