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

  if (generate === numberPad) {
    document.getElementById('match').style.visibility = 'visible';
  }
  else if (generate !== numberPad) {
    document.getElementById('not-match').style.visibility = 'visible';
  }
}

// Submission Button

var count = 3;
var button = document.getElementById("countButton");
var display = document.getElementById("displayCount");

button.onclick = function(){
  if(count > 0){
    count--;
    display.innerHTML = count;
    document.getElementById
  }

}