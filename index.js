
const form = document.querySelector("form")

form.addEventListener('submit', function (e){
    e.preventDefault()
    
    for ( let i = 0; i < e.target.elements.length; i++) {
        if(e.target.elements[i].value)console.log(e.target.elements[i].value)
    }

})