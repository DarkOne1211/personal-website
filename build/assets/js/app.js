var timelinetextBox=document.getElementsByClassName("timeline-text"),timeline=document.getElementsByClassName("timeline"),coll=document.getElementsByClassName("collapsible"),screenwidth=screen.width;function readjustHeight(){screenwidth<=764&&(timelinetextBox[2].setAttribute("style","height: 220px !important"),timelinetextBox[4].setAttribute("style","height: 180px !important"))}function timelinetextReveal(){window.sr=ScrollReveal(),sr.reveal(timelinetextBox[0],{reset:!0,duration:1e3}),sr.reveal(timelinetextBox[1],{reset:!0,duration:1e3}),sr.reveal(timelinetextBox[2],{reset:!0,duration:1e3}),sr.reveal(timelinetextBox[3],{reset:!0,duration:1e3}),sr.reveal(timelinetextBox[4],{reset:!0,duration:1e3}),readjustHeight()}function activateCollapsible(){var e;for(e=0;e<coll.length;e++)coll[e].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}readjustHeight(),timelinetextReveal(),activateCollapsible(),console.log(screenwidth);