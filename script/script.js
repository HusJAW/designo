


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

