var timelinetextBox = document.getElementsByClassName("timeline-text");
var timeline = document.getElementsByClassName("timeline");
var screenwidth = screen.width;
readjustHeight();
timelinetextReveal();

console.log(screenwidth);
function readjustHeight() {
  if (screenwidth <= 764) {
    timelinetextBox[2].setAttribute("style", "height: 220px !important");
    timelinetextBox[4].setAttribute("style", "height: 180px !important");
  }
}

function timelinetextReveal() {
  window.sr = ScrollReveal();
  sr.reveal(timelinetextBox[0], { reset: true, duration: 1000 });
  sr.reveal(timelinetextBox[1], { reset: true, duration: 1000 });
  sr.reveal(timelinetextBox[2], { reset: true, duration: 1000 });
  sr.reveal(timelinetextBox[3], { reset: true, duration: 1000 });
  sr.reveal(timelinetextBox[4], { reset: true, duration: 1000 });
  readjustHeight();
}
