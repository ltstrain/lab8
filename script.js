// Lab 7 - Basic JavaScript Event Handling and DOM
// Author: London Strain
// Date: 11/11/25

document.addEventListener("DOMContentLoaded", function() {

  // Grab the button, input, and output elements
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  // Add click event listener
  button.addEventListener("click", function() {

    // Get the input value
    let userText = input.value;

    // 1. Alert box with your name + input
    alert("London: " + userText);

    // 2. Change h2 text to input value only
    output.textContent = userText;

  });

});
