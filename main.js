// JavaScript ITM780 Lab 10 Document - Joshua Chung

// Adding Event for button to toggle large text
function largeText() 
{
  document.body.classList.toggle("largefontsize");
}

// Adding Event for button to toggle colour change
function colourFunction() 
{
  document.body.classList.toggle("colourfunction");
}

// Questions/Input Elements
window.onload=function()
	{
		var user = document.getElementById("profile");
		console.log(user.value); // the input value of the user such as full name, email, and phone number
		console.log(user.type); // the type of element the input is
	}

var user = document.getElementById("profile"); // the text input of elements from user such as full name, email, and phone number

localStorage.setItem("profile"); // stores the input or information the user has entered
console.log(localStorage.getItem("profile"));// receives or gets the information
localStorage.removeItem("profile"); // remove items from localstorage or clears information

//Adding Event for button to prompt the user to enter their name.
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

//Adding a toggle function to zoom in and out
function zoom(element) {
    element.classList.toggle("imgZoom")
}

//Adding a toggle function to show and not show dropdown items.
function toggleFunction() {
    document.getElementById("contactDropdown").classList.toggle("show");
    }

//Close dropdown when dropdown is open & user clicks outside the button 
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

//When the mouse pointer is on dropdown items, it changes the colour to white
function mouseOver() {
  document.getElementById("contactDropdown").style.color = "white";
}

function mouseOut() {
  document.getElementById("contactDropdown").style.color = "white";
}