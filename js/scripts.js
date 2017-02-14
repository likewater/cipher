var sentence = prompt("Enter a sentence: ");
var lastLetter = sentence.charAt(sentence.length-1);
var firstLetter = sentence.charAt(0);

var firstLast = function() {
  return (firstLetter + lastLetter).toUpperCase();
}
var lastFirst = function() {
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

$(".basic").click(function() {
  alert(sentence);
});
$(".cipher").click(function() {
  alert(lastFunction());
});
