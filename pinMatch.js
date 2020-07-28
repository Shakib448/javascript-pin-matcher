function generatePin() {
  // 4 digit random number
  document.getElementById("generatePin").value = (Math.round(1000 + Math.random() * 9000));
}

function removeNumbers() {
  // One by one number remove function 
  const number = document.getElementById("numberKeypad").value;
  document.getElementById("numberKeypad").value = number.substring(0, number.length - 1)
}

function validPinCode() {
  const generate =  document.getElementById('generatePin').value;
  const numberPad = document.getElementById('numberKeypad').value;

  const regex = /^[0-9]{4}$/;
  
  if(regex.test(generate) == regex.test(numberPad)){
    alert("thanks for valid code");
  }else if ((regex.test(generate) != regex.test(numberPad))){
    alert("sorry the code is not matched")
  }else{
    return "something is went wrong";
  }
}