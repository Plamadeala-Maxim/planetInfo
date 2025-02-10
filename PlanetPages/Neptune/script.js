$(document).ready(function() {
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
    // function animateArc(element, startX, startY, endX, endY, duration,startWidth, endWidth, amplitude) {
    animateArc($('#planetImg'),     220,   -80,    1067,   5,   3000,     70,      464,       -50);


});
const planet = document.getElementById('planetImg')
document.getElementById('planetImg').style.rotate ='0deg'



 




    const allTextes =document.querySelectorAll('.texts > p')

    const planetName =document.getElementById('planetName')
    setTimeout(() => {
        planetName.style.marginLeft = `${parseFloat(window.getComputedStyle(planetName).marginLeft) + 170}px`
        planetName.style.opacity = 1
        }, 3000);
    
    setTimeout(() => {
    allTextes.forEach((text,index)=>{
    setTimeout(() => {
        text.style.marginTop = `${parseFloat(window.getComputedStyle(text).marginTop) - 20}px`
        text.style.opacity = 1
    },  index * 200);
    })
    }, 3800);