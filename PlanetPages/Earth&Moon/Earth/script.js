const planet = document.getElementById('moonPlanet')

function animateArc(element, startX, startY, endX, endY, duration,startWidth,endWidth, amplitude) {
    const deltaX = endX - startX;
    const midX = startX + deltaX / 2;

    $({x: startX, y: startY}).animate({x: endX}, {
        duration: duration,
        step: function(now, fx) {
            if (fx.prop === 'x') {
                const x = now;
                const progress = (x - startX) / deltaX;
                const y = startY + (endY - startY) * progress - amplitude * Math.sin(Math.PI * progress);

                const width = startWidth + (endWidth - startWidth) * progress;
                element.css({
                    left: x,
                    top: y,
                    width: width,
                });
            }
            
        },
        complete: function() {
            console.log("Animation complete");
        }
    });
    
}

$(document).ready(function() {

    // function animateArc(element, startX, startY, endX, endY, duration,startWidth, endWidth, amplitude) {
    animateArc($('#planetImg'),     455,   750,    1030,   180,   2300,     205,      500,       -50);
    animateArc($('#moonPlanet'),     800,   -50,    1470,   50,   2300,     10,      25,       20);
    planet.addEventListener("click",(ev) =>{


//mai jos e functia la apasarea caruia se face miscare 
    // function animateArc(element, startX, startY, endX,  endY, duration,startWidth, endWidth, amplitude) {
        animateArc($('#moonPlanet'),  800,   -50,    1470,   50,   2300,     10,        25,        20);

    })
});



// planet.addEventListener("click",(ev) =>{
//     $(document).ready(function() {
// // animateArc($('#moonPlanet'),     800,   -50,    1470,   50,   2300,     10,      25,       20);

// });
// console.log('hui');

// });




 




    const allTextes =document.querySelectorAll('.texts > p')

    const planetName =document.getElementById('planetName')
    setTimeout(() => {
        planetName.style.marginLeft = `${parseFloat(window.getComputedStyle(planetName).marginLeft) + 170}px`
        planetName.style.opacity = 1
        planetName.style.transition = "all 1.1s ease-in-out"
        }, 2500);
    
    setTimeout(() => {
    allTextes.forEach((text,index)=>{
    setTimeout(() => {
        text.style.marginTop = `${parseFloat(window.getComputedStyle(text).marginTop) - 20}px`
        text.style.opacity = 1
        text.style.transition = "all 1.1s ease-in-out"
    },  index * 200);
    })
    }, 3300);