function generatePin() {
  // 4 digit random number
  document.getElementById("generatePin").value = (Math.round(1000 + Math.random() * 9000));
}

function removeNumbers() {
  const number = document.getElementById("numberKeypad").value;
  document.getElementById("numberKeypad").value = number.substring(0, number.length - 1)
}