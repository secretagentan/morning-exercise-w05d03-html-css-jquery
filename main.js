console.log("hullo");

var colors = ['pink', 'thistle', 'palegreen', 'gold', 'turquoise'];

var randomColor;
// var randomColor2;

function random() {
  randomColor = colors[Math.floor( Math.random() * colors.length)];
  return randomColor;
}
random();
console.log(random());
// console.log(randomColor);

var $bigBox = $('.big-box');
var $smallBox = $('.small-box');

$(document).ready(function() {
  $bigBox.css("background-color", random());
  $smallBox.css("background-color", random());
});

$bigBox.click(function(evt){
  $(this).css("background-color", random());
  console.log("clicked");
  console.log(evt);
  $(this).children().css("background-color", random());
});
