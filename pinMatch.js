function generatePin() {
    // 4 digit random number
    document.getElementById("generatePin").value = (Math.round(1000 + Math.random() * 9000));
  }