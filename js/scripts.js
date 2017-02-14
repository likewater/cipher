var sentence = prompt("Enter a sentence: "); //take some input
var lastLetter = sentence.charAt(sentence.length-1); //find letter at end
var firstLetter = sentence.charAt(0); //find first letter

var firstLast = function() {
  return (firstLetter + lastLetter).toUpperCase(); //concat first and last letter together and then uppercase it
}
var lastFirst = function() { //take shorted letters and reverse
  var firstShort = firstLast().charAt(0);
  var lastShort = firstLast().charAt(1);
  return (lastShort + firstShort).toUpperCase();
}
var thirdFunction = function() {
  firstLast();
  return sentence + lastFirst();
}
var fourthFunction = function() {
  var senLength = parseInt(sentence.length);
  var senHalf = senLength / 2;
  var nthLetter = sentence.charAt(senHalf);
  return nthLetter + thirdFunction();
}
var lastFunction = function() {
  return fourthFunction().split("").reverse().join("");
}

$("h2").click(function() {
  alert(sentence);
});
$("h3").click(function() {
  alert(lastFunction());
});
