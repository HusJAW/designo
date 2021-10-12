


function hamburgerMenu(){
const overlay = document.querySelector('.overlay')
const navMenu = document.querySelector('.page-navigation')
const burgerMenu = document.querySelector('.hamburger-lines-container')

const navClassArray = [overlay, navMenu]
const hamburgerLinesArrat = [...document.querySelectorAll('.hamburger-line')]

burgerMenu.addEventListener('click', e =>{

    // hamburgerLinesArrat[0].classList.toggle('hamburger-line-rotate-left')
    // hamburgerLinesArrat[1].classList.toggle('hamburger-line-center')
    // hamburgerLinesArrat[2].classList.toggle('hamburger-line-rotate-right')
    hamburgerLinesArrat.forEach(item =>{
        item.classList.toggle('active')
    })


    navClassArray.forEach(classes =>{
        
        classes.classList.toggle('show')
    })
})



}

hamburgerMenu()



// basically i need to check if a feild is required 
// if it is required then on sbmuit and active class will be added to "cant be empty !"
//cant be empty should be postioend abslout to the input that is required 

// so i have to creat an event listenr that on submit checks if a field is reqired  and its empty then the alert will be activated 

// do the html css to put the alert in place 
// and set it to display none and add an active class to change it to display block 

function footerRequiredAction(){
const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const alert = document.querySelectorAll('.alert')



form.addEventListener('submit', e =>{
    e.preventDefault()
    let i = 0

    
    input.forEach( val =>{
      if(val.value == ""){
        alert[i].classList.add('alert-on')
        i++
      } 
      else{
        alert[i].classList.remove('alert-on')
      i++
    }
    
    })
   
})
}
footerRequiredAction()
