var prompt = document.querySelector(".prompt");
var input = document.querySelector("input");
var container = document.querySelector('.prompt-container');

prompt.addEventListener("click", function() {
  input.focus();
});

container.addEventListener('mousedown', function(e) {
  var initialX = e.clientX;
  var initialY = e.clientY;
  var containerX = container.offsetLeft;
  var containerY = container.offsetTop;
  var diffX;
  var diffY;
  var mousemove = function(e) {
    diffX = e.clientX - initialX;
    diffY = e.clientY - initialY;
    container.style.left = (containerX + diffX) + 'px';
    container.style.top = (containerY + diffY) + 'px';
  }
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', mousemove);
  });
});

var closeBtn = document.querySelector('.prompt-header-close-btn');
closeBtn.addEventListener('click', function() {
  container.style.display = 'none';
});

var promptInput = document.querySelector("#prompt-input");
/**
 * function adds a event listener for 
 * taking the commands that are typed in the 
 * terminal
 */
promptInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 'Enter' key
    event.preventDefault();
    var userInput = promptInput.value;
    var p = document.createElement("p");
    p.innerHTML = prompt.innerHTML + " " + userInput;
    p.classList.add("command");
    document.querySelector(".prompt-container").appendChild(p);
    if (userInput === "cls") {
      var commands = document.querySelectorAll(".command");
      for (var i = 0; i < commands.length; i++) {
        if (commands[i].previousElementSibling === prompt) {
          commands[i].remove();
        }
      }
    }
    if (userInput === "help") {
      p.innerHTML = prompt.innerHTML + "You can write: cls to clear the screen " ;
    }
    promptInput.value = "";
  }
});

var terminalBtn = document.querySelector('.terminal-btn');
terminalBtn.addEventListener('click', function(){
    document.querySelector('.prompt-container').style.display = 'block';
});

// Get the button and the dropdown menu elements
var button = document.getElementsByClassName("dropbtn")[0];
var dropdown = document.getElementById("myDropdown");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Toggle the display of the dropdown menu
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});

// Add a click event listener to the document
document.addEventListener("click", function(event) {
  // If the click is outside the button or the dropdown menu, hide the menu
  if (event.target !== button && event.target !== dropdown) {
    dropdown.style.display = "none";
  }
});