
const planet = document.getElementById('planetImg')



setTimeout(() => {
        planet.style.left =' 50px'
    planet.style.top =' 10px'
    planet.style.width =' 669px'
}, 1000);
    // width: 669px;
    // top: 10px;
    // left: 50px;




















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