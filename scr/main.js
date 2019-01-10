(function() {

    

    function runTimer() { 
        var seconds = 0
          window.setInterval(function() {
           seconds++
           console.log(seconds)
           runAction(seconds)
          }, 1000);
        }

        runTimer()
// var animation = document.getElementById("animation")
// animation.onload = runTimer;
// animation.src = "img/opening.gif"+"?a="+Math.random();


function runAction(seconds){
    switch(seconds) {
        case 1:
            showElement('title-blue')
          break;
        case 2:
        showElement('title-black')
          break;
        default:
        // console.log('its more than 2')
      }
}

function showElement(name) {
    var el = document.getElementById(name);
    el.classList.remove('invisible');
    el.classList.add('visible');
}


// var vid = document.getElementById("titlemp4");
// vid.addEventListener('ended', function() {
//     runTimer();
// })

// showBlueTitle()



})()
    




