function generatePin() {
  // 4 digit random number
  document.getElementById("generatePin").value = (Math.round(1000 + Math.random() * 9000));
}

function removeNumbers() {
  // One by one number remove function 
  const number = document.getElementById("numberKeypad").value;
  document.getElementById("numberKeypad").value = number.substring(0, number.length - 1)
}

// Valid pin code  function

function validPinCode() {
  const generate = document.getElementById('generatePin').value;
  const numberPad = document.getElementById('numberKeypad').value;

  if (generate == "") {
    alert("First generate your pin number")
  } else if (generate == numberPad) {
    document.getElementById('match').style.visibility = 'visible';
  } else if (generate != numberPad) {
    document.getElementById('not-match').style.visibility = 'visible';
    clickFunc();
  }
}

// Submission Button

let count = 3;


function clickFunc() {
  count--;
  document.getElementById('btn-negative-count').innerHTML = count;
  let btn = document.querySelector('button.submit-btn');
  if (count == 0) {
    btn.disabled = true;

    let timeLeft = 10;
    let elem = document.getElementById('disableRecoveryTimer');
    let timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        location.reload();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  }
}

