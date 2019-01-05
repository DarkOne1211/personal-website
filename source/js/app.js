var timelinetextBox = document.getElementsByClassName("timeline-text");
var timeline = document.getElementsByClassName("timeline");
var coll = document.getElementsByClassName("collapsible");

// AI project
var headerProjectText = document.getElementsByClassName("header_image");
var testh1 = headerProjectText[0].getElementsByTagName("h1");
var testdata = document.getElementsByClassName("testdata");
var testDataContainer = testdata[0].getElementsByClassName("C_Header");
var allcards1 = testDataContainer[0].getElementsByClassName("card");
var set1 = false;

// ML Project
var headerProjectText2 = document.getElementsByClassName("ml_header_image");
var testh2 = headerProjectText2[0].getElementsByTagName("h1");
var testdata2 = document.getElementsByClassName("testdata");
var testDataContainer2 = testdata2[1].getElementsByClassName("C_Header");
var allcards2 = testDataContainer2[0].getElementsByClassName("card");
var set2 = false;

// Python Project
var headerProjectText3 = document.getElementsByClassName("python_header_image");
var testh3 = headerProjectText3[0].getElementsByTagName("h1");
var testdata3 = document.getElementsByClassName("testdata");
var testDataContainer3 = testdata3[2].getElementsByClassName("C_Header");
var allcards3 = testDataContainer3[0].getElementsByClassName("card");
var set3 = false;

// C/C++ Project
var headerProjectText4 = document.getElementsByClassName("c_header_image");
var testh4 = headerProjectText4[0].getElementsByTagName("h1");
var testdata4 = document.getElementsByClassName("testdata");
var testDataContainer4 = testdata4[3].getElementsByClassName("C_Header");
var allcards4 = testDataContainer4[0].getElementsByClassName("card");
var set4 = false;

// miscellaneous Project
var headerProjectText5 = document.getElementsByClassName("misc_header_image");
var testh5 = headerProjectText4[0].getElementsByTagName("h1");
var testdata5 = document.getElementsByClassName("testdata");
var testDataContainer5 = testdata5[4].getElementsByClassName("C_Header");
var allcards5 = testDataContainer5[0].getElementsByClassName("card");
var set5 = false;

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

function toggleButton2(x) {
  console.log(x);
  console.log(allcards2);
  var i = 0;
  if (set2 === true) {
    testh2[0].className = "";
    testdata2[1].style.height = "100vh";
    testDataContainer2[0].style.display = "none";
    for (i = 0; i < allcards2.length; i++) {
      allcards2[i].style.display = "none";
    }
    set2 = false;
  } else {
    testh2[0].className = "";
    testh2[0].className += "offset1";
    console.log(testdata2[0]);
    testdata2[1].style.height = "150vh";
    testDataContainer2[0].style.display = "flex";
    for (i = 0; i < allcards2.length; i++) {
      allcards2[i].style.display = "block";
    }
    set2 = true;
  }
  x.classList.toggle("change");
}

function toggleButton3(x) {
  var i = 0;
  if (set3 === true) {
    testh3[0].className = "";
    testdata3[2].style.height = "100vh";
    testDataContainer3[0].style.display = "none";
    for (i = 0; i < allcards3.length; i++) {
      allcards3[i].style.display = "none";
    }
    set3 = false;
  } else {
    testh3[0].className = "";
    testh3[0].className += "offset1";
    testdata3[2].style.height = "150vh";
    testDataContainer3[0].style.display = "flex";
    for (i = 0; i < allcards3.length; i++) {
      allcards3[i].style.display = "block";
    }
    set3 = true;
  }
  x.classList.toggle("change");
}

function toggleButton4(x) {
  var i = 0;
  if (set4 === true) {
    testh4[0].className = "";
    testdata4[3].style.height = "100vh";
    testDataContainer4[0].style.display = "none";
    for (i = 0; i < allcards4.length; i++) {
      allcards4[i].style.display = "none";
    }
    set4 = false;
  } else {
    testh4[0].className = "";
    testh4[0].className += "offset1";
    testdata4[3].style.height = "150vh";
    testDataContainer4[0].style.display = "flex";
    for (i = 0; i < allcards4.length; i++) {
      allcards4[i].style.display = "block";
    }
    set4 = true;
  }
  x.classList.toggle("change");
}

function toggleButton4(x) {
  var i = 0;
  if (set4 === true) {
    testh4[0].className = "";
    testdata4[3].style.height = "100vh";
    testDataContainer4[0].style.display = "none";
    for (i = 0; i < allcards4.length; i++) {
      allcards4[i].style.display = "none";
    }
    set4 = false;
  } else {
    testh4[0].className = "";
    testh4[0].className += "offset1";
    testdata4[3].style.height = "150vh";
    testDataContainer4[0].style.display = "flex";
    for (i = 0; i < allcards4.length; i++) {
      allcards4[i].style.display = "block";
    }
    set4 = true;
  }
  x.classList.toggle("change");
}

function toggleButton5(x) {
  var i = 0;
  if (set5 === true) {
    testh5[0].className = "";
    testdata5[4].style.height = "100vh";
    testDataContainer5[0].style.display = "none";
    for (i = 0; i < allcards5.length; i++) {
      allcards5[i].style.display = "none";
    }
    set5 = false;
  } else {
    testh5[0].className = "";
    testh5[0].className += "offset1";
    testdata5[4].style.height = "150vh";
    testDataContainer5[0].style.display = "flex";
    for (i = 0; i < allcards5.length; i++) {
      allcards5[i].style.display = "block";
    }
    set5 = true;
  }
  x.classList.toggle("change");
}
