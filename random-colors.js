
/* ---- GENERATE RANDOMLY COLORED ITEMS ------------------------ */

// Print statement
function print(message) {
  document.write(message);
}


// Generate random RGB values
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

// Generate three random RGB values to create a random color
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

// Create numberOfElements items using randomRGB() and randomColor()
var numberOfElements = 10;
var rgbColor;
var html = '';

for (var i = 0; i < numberOfElements; i++) {
  rgbColor = randomColor();
  html =+ '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);

/* ---- SOURCE RANDOMLY COLORED ITEMS: teamtreehouse.com --------- */