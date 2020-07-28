function generatePin() {
  // 4 digit random number
  document.getElementById("generatePin").value = (Math.round(1000 + Math.random() * 9000));
}

function removeNumbers() {
  // One by one number remove function 
  const number = document.getElementById("numberKeypad").value;
  document.getElementById("numberKeypad").value = number.substring(0, number.length - 1)
}

// Valid pin code  

function validPinCode() {
  const generate = document.getElementById('generatePin').value;
  const numberPad = document.getElementById('numberKeypad').value;

  const regex = /^[0-9]{4}$/;

  if (regex.test(generate) === regex.test(numberPad)) {
    document.getElementById('match').style.visibility = 'visible';
  }
  else if ((regex.test(generate) !== regex.test(numberPad))) {
    document.getElementById('not-match').style.visibility = 'visible';
  }
}

// Submission result