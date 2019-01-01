var timelinetextBox = document.getElementsByClassName("timeline-text");
var timeline = document.getElementsByClassName("timeline");
var coll = document.getElementsByClassName("collapsible");
var screenwidth = screen.width;
readjustHeight();
timelinetextReveal();
activateCollapsible();

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

function activateCollapsible() {
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
