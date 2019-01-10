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
            showMercs()
          break;
        case 2:
            showArrows()
          break;
          case 5:
          moveHeaderUp()
          break;
        default:
        // console.log('its more than 2')
      }
}

function showMercs() {
    var mercs = document.getElementById('mercs');
    mercs.classList.remove('invisible');
    mercs.classList.add('make-visible');
}
function showArrows() {
    var mercs = document.getElementById('arrows');
    mercs.classList.remove('invisible');
    mercs.classList.add('make-visible');
}

function moveHeaderUp() {
    var header = document.getElementById('animation')
    header.classList.add('move-up')
}

var vid = document.getElementById("titlemp4");
vid.play();





})()
    




