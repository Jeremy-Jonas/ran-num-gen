var min = 0
var max = 0

function generateNumber() {
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    
    var x = Math.floor(Math.random() * (max - min + 1) ) /*+ min*/;
    document.getElementById("answer").innerHTML = x
}