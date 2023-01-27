// Add JavaScript to capture user input and display it in the terminal
var input = document.getElementById("input");
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var userInput = input.value;
    var prompt = document.querySelector(".prompt");
    var p = document.createElement("p");
    p.innerHTML = prompt.innerHTML + " " + userInput;
    document.querySelector(".terminal").appendChild(p);
    input.value = "";
  }
});
