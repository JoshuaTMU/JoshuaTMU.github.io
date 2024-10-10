// JavaScript ITM780 Lab 5 Document - Joshua Chung

//Step A:  Adding Event for button to prompt the user to enter their name.
function nameprompt() {
    var message;
    var your_name = prompt("Please enter your name:");
    if (your_name == null || your_name == "") {
        message = "Cancelled prompt. Please try again.";
    } else {
        message = "You are " + your_name + "!"
    }
    document.getElementById("ButtonPrompt").innerHTML = message;
  }

//Step B: Adding a toggle function to zoom in and out
function zoom(element) {
    element.classList.toggle("imgZoom")
}

//Step C: Adding a toggle function to show and not show dropdown items.
function toggleFunction() {
    document.getElementById("contactDropdown").classList.toggle("show");
    }

//Step C: Close dropdown when dropdown is open & user clicks outside the button 
    window.onclick = function(event) {
        if (!event.target.matches('.dropdownbutton')) {
          var dropdowns = document.getElementsByClassName("dropdownitems");
          for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

//Step D: When the mouse pointer is on dropdown items, it changes the colour to white
function mouseOver() {
  document.getElementById("contactDropdown").style.color = "white";
}

function mouseOut() {
  document.getElementById("contactDropdown").style.color = "white";
}