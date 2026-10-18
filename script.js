//var time = new Date().getHours();
//console.log(time);
var time = 20
// Your conditional statements here
var greeting = "Hello, ";
var name = "Abby!";
// alert()
if (time < 12) {
  greeting = "Good morning! ";
} else if (time <= 18) {
  greeting = "Good afternoon! ";
} else if (time <= 22) {
  greeting = "Good evening! ";
} else{
  greeting = "Go to bed! ";
}
alert(greeting + name);

