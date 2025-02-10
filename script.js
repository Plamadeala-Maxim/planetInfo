const spinMeRightRound = document.getElementById("spinMeRightRound")
const sun = document.getElementById("sun")
const yeap = document.getElementById("yeap")
const couse = document.getElementById("couse")
const sunTextsP = document.querySelectorAll('#sunTexts > p');
const mercury = document.getElementById("mercury")
const venus = document.getElementById("venus")
const earth = document.getElementById("earth")
const moon = document.getElementById("moon")
const mars = document.getElementById("mars")
const jupiter = document.getElementById("jupiter")
const saturn = document.getElementById("saturn")
const uran = document.getElementById("uran")
const neptune = document.getElementById("neptune")

console.log(sunTextsP);

const planetArr =[mercury,venus,earth,moon,mars,jupiter,saturn,uran,neptune]
    let nr = 1


sun.addEventListener("click",function() {

    planetArr.forEach(function(planet) {
    if (nr % 2 === 1) {
        planet.style.marginLeft = `${parseFloat(window.getComputedStyle(planet).marginLeft) + 1200}px`
        planet.style.opacity = 0
        setTimeout(function() {
            planet.style.display = 'none'
        },2000)

        sun.style.width = '940px'
        sun.style.height = '940px'
        spinMeRightRound.style.marginLeft = '710px'
        sunTextsP.forEach((p, index) => {
            setTimeout(() => {
              p.style.animation = 'slideIn 1.5s forwards 4.5s';
            }, index * 1300); 
            setTimeout(() => {
                yeap.style.width = '500px';
                yeap.style.animation = 'typing 1s steps(40, end)';
              },800); 
              setTimeout(() => {
                couse.style.width = '500px';
                couse.style.animation = 'typing 2.3s steps(40, end)';
              },2500); 

          });
    } else {
        planet.style.display = 'flex'
            planet.style.marginLeft = `${parseFloat(window.getComputedStyle(planet).marginLeft) - 1200}px`
        planet.style.opacity = 1
        sun.style.width = '600px'
        sun.style.height = '600px'
        spinMeRightRound.style.marginLeft = '-710px'
        sunTextsP.forEach((p) => {
              p.style.animation = 'slideOut 2s forwards';
          });
          yeap.style.animation = 'unTyping 1s steps(20, end)';
          yeap.style.width = '0';
          couse.style.animation = 'unTyping 0.8s steps(20, end)';
          couse.style.width = '0';
    }
    })

         
    nr++
})


const fileNames =['Mercury','Venus','Earth','Moon','Mars','Jupiter','Saturn','Uranus','Neptune']
planetArr.forEach(function (planet,index) {

    planet.onclick =function (ev) {




    fileNames.forEach(function (fName,findex) {
        if ((fName === 'Earth' &&  planet === planetArr[2])||fName === 'Moon' &&  planet === planetArr[3]) {
            window.location.href=`PlanetPages/Earth&Moon/${fName}/index.html`
            
        } else if (index === findex) {
    window.location.href=`PlanetPages/${fName}/index.html`
} 
    })
    }
})

