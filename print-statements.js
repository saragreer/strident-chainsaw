/** Print to screen **/

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// outdated

function print(message) {
  document.write(message);
}