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

  if(generate == ""){
    alert("Please set your input")
  }else if (generate == numberPad) {
    document.getElementById('match').style.visibility = 'visible';
  }else if (generate != numberPad) {
    document.getElementById('not-match').style.visibility = 'visible';
    clickFunc();
  }
}

// Submission Button

// function negBtn() {
//   let count = 0;
//   let button = document.getElementById("btnCount");
//   let display = document.getElementById("btn-negative-count");

//   button.onclick = function () {
//     if (count < 0) {
//       count--;
//       display.innerText = count;
//       button.disabled = true;
//       console.log('this is disabled')
//     }
//   }

// }



var count = 3;
function clickFunc() {
    count--;
    document.getElementById('btn-negative-count').innerHTML = count;
    var btn = document.querySelector('disableBtn');

    if(count <= 3) {
        btn.disabled = true;
    }
}

