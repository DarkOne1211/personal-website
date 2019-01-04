var timelinetextBox = document.getElementsByClassName("timeline-text");
var timeline = document.getElementsByClassName("timeline");
var coll = document.getElementsByClassName("collapsible");

var headerProjectText = document.getElementsByClassName("header_image");
var testh1 = headerProjectText[0].getElementsByTagName("h1");
var testdata = document.getElementsByClassName("testdata");
var testDataContainer = testdata[0].getElementsByClassName("C_Header");
var allcards1 = testDataContainer[0].getElementsByClassName("card");
var set1 = false;

var screenwidth = screen.width;
readjustHeight();
activateCollapsible();

console.log(screenwidth);
function readjustHeight() {
  if (screenwidth <= 764) {
    timelinetextBox[2].setAttribute("style", "height: 220px !important");
    timelinetextBox[4].setAttribute("style", "height: 180px !important");
  }
}

function toggleButton(x) {
  console.log(x);
  console.log(allcards1);
  var i = 0;
  if (set1 === true) {
    testh1[0].className = "";
    testdata[0].style.height = "100vh";
    testDataContainer[0].style.display = "none";
    for (i = 0; i < allcards1.length; i++) {
      allcards1[i].style.display = "none";
    }
    set1 = false;
  } else {
    testh1[0].className = "";
    testh1[0].className += "offset1";
    console.log(testdata[0]);
    testdata[0].style.height = "150vh";
    testDataContainer[0].style.display = "flex";
    for (i = 0; i < allcards1.length; i++) {
      allcards1[i].style.display = "block";
    }
    set1 = true;
  }
  x.classList.toggle("change");
}
