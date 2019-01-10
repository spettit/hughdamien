(function() {

    var titleBlue = document.getElementById('title-blue')
    var titleBlack = document.getElementById('title-black')
    var titleBlock = document.getElementById('title-block')
    var mercs = document.getElementById('mercs');
    var scrollArrows = document.getElementById('scroll-arrows');

  function runTimer() {
    var seconds = 0;
    window.setInterval(function() {
      seconds++;
      console.log(seconds);
      runAction(seconds);
    }, 1000);
  }

 

  function runAction(seconds) {
    switch (seconds) {
      case 1:
        showElement(titleBlue);
        break;
      case 3:
        showElement(titleBlack);
        break;
    case 5:
        moveTitleUpOne()
        break;
        case 6:
        showElement(mercs);
        break;
        case 7:
        showElement(scrollArrows);
        break;
        case 9:
        hideElement(scrollArrows);
        break;
      default:
    }
  }

  function showElement(el) {
    el.classList.remove("be-invisible");
    el.classList.add("be-visible");
  }

  function hideElement(el) {
    el.classList.remove("be-visible");
    el.classList.add("be-invisible");
  }

  function moveTitleUpOne() {
    titleBlock.classList.remove('be-centered')
    titleBlock.classList.add('positionOne')
  }


  runTimer();

})();
