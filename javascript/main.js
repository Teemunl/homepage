var prompt = document.querySelector(".prompt");
var input = document.querySelector("input");
var container = document.querySelector('.prompt-container');

prompt.addEventListener("click", function() {
  input.focus();
});

container.addEventListener('mousedown', function(e) {
  // your existing code here
});

var closeBtn = document.querySelector('.prompt-header-close-btn');
closeBtn.addEventListener('click', function() {
  container.style.display = 'none';
});

var promptInput = document.querySelector("#prompt-input");
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
    promptInput.value = "";
  }
});

var terminalBtn = document.querySelector('.terminal-btn');
terminalBtn.addEventListener('click', function(){
    document.querySelector('.prompt-container').style.display = 'block';
});

input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // 'Enter' key
    event.preventDefault();
    var userInput = input.value;
    var p = document.createElement("p");
    p.innerHTML = prompt.innerHTML + " " + userInput;
    p.classList.add("command");
    p.style.color = "green";
    document.querySelector(".prompt-container").appendChild(p);
    if (userInput === "cls") {
      var commands = document.querySelectorAll(".command");
      for (var i = 0; i < commands.length; i++) {
        if (commands[i].previousElementSibling === prompt) {
          commands[i].remove();
        }
      }
    }
    prompt.innerHTML = "C:\\Users\\username>";
    input.value = "";
  }
});
input.classList.toggle('hide');
input.classList.toggle('blink');
