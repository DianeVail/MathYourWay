"use strict"

//Code for math fact of the day API //

//Code for Pythagorean Theorem function

const submitBtn = document.getElementById("submit-btn");  //Submit-btn
const sideA = document.getElementById("side-a");//input a
const sideB = document.getElementById("side-b");//input b
const hypotenuse = document.getElementById("hypotenuse");  //output value for c

let answer = "";
let legA = 0;
let legB = 0;

function checkValues() {  //Check to make sure input is valid
    legA = parseInt(sideA.value);
    legB = parseInt(sideB.value);  //User enters numbers  //User enters numbers
    
    if (legA <=0 || legB <= 0) {
        hypotenuse.innerText = "Please enter positive values only";
    } else {
        answer = Math.sqrt(legA*legA + legB*legB);
        hypotenuse.innerText = answer;
    }
}
function render() {  
   checkValues();
}
submitBtn.addEventListener("click", function () {
    render();
});




