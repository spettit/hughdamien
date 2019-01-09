(function() {

    var seconds = 0

    function runTimer() {  
          window.setInterval(function() {
           seconds++
           console.log(seconds)
           runAction(seconds)
          }, 1000);
        }

        
var animation = document.getElementById("animation")
animation.src = "img/opening.gif"+"?a="+Math.random();
animation.onload = runTimer();

function runAction(seconds){
    switch(seconds) {
        case 5:
            showMercs()
          break;
        case 6:
            showArrows()
          break;
          case 8:
          moveHeaderUp()
          break;
        default:
        console.log('its more than 2')
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


})()
    



