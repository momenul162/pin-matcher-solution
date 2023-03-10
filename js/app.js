function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function pinGenerate() {
  const pin = getPin();
  document.getElementById("pin-field").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("pin-field").value;
  const typedPin = document.getElementById("typed-numbers").value;
  if (pin == typedPin) {
    document.getElementById("notify-success").style.display = "block";
    document.getElementById("notify-fail").style.display = "none";
  } else {
    document.getElementById("notify-fail").style.display = "block";
    document.getElementById("notify-success").style.display = "none";
  }
}
