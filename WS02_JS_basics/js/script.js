// Exercise 6 - Button
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  alert("JavaScript works!");
});


// Exercise 1 - Developer Tools and Console
console.log("Hello World!");
alert("Hello World!");


// Exercise 2 - Variables
const username = "Pauli";
let age = 20;
const favoriteAnimal = "Bat";

console.log(username);
console.log(age);
console.log(favoriteAnimal);

console.log("Hello! My name is " + username + " and my favorite animal is the " + favoriteAnimal);


// Exercise 3 - User Input
const visitorname = prompt("What is your name?");

console.log("Hello " + visitorname + "! Welcome to JavaScript.");


// Exercise 4 - Conditionals
const visitorage = prompt("What is your age?");

if (visitorage >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are under 18.");
}


// Exercise 5 - Functions
function greetUser(name) { console.log("Hello " + name + "!"); }

greetUser("somename");
greetUser("Pauli");