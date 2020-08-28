var hisName = prompt("What is his name?");
var herName = prompt("What is her name?");

var loveScore = Math.random() * 100; // This multiplies the random number generated which is a floating point usually 0inclusive - 1 inclusive by 100
loveScore = Math.floor(loveScore) + 1; // This rounds down to the nearest integer and adds 1
alert("Your love score is " + loveScore);
