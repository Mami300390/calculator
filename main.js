let display = document.getElementById("display");

function appendToDisplay(val) {
  if (display.value === "Error" || display.value === "0") {
    display.value = "";
  }
  display.value += val;
}

function clearDisplay() {
  display.value = "0";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
