
const planet = document.getElementById('planetImg')

    planet.style.left ='154px'
    planet.style.top =' 207px'
    planet.style.width ='1250px '























const allTextes =document.querySelectorAll('.texts > p')

const planetName =document.getElementById('planetName')

const planetImg =document.getElementById('planetImg')
console.log(planetName);


setTimeout(() => {
    planetName.style.marginLeft = `${parseFloat(window.getComputedStyle(planetName).marginLeft) + 170}px`
    planetName.style.opacity = 1
    }, 2500);

setTimeout(() => {
allTextes.forEach((text,index)=>{
setTimeout(() => {
    text.style.marginTop = `${parseFloat(window.getComputedStyle(text).marginTop) - 20}px`
    text.style.opacity = 1
},  index * 200);
})
}, 3500);