"use strict"

//Code for Pythagorean Theorem function

const submitBtn = document.getElementById("submit-btn");  //Submit-btn
const sideA = document.getElementById("side-a");//input a
const sideB = document.getElementById("side-b");//input b
const hypotenuse = document.getElementById("hypotenuse");  //output value for c
const message = document.getElementById("message") //outputs a message

let result = "";

function checkValues() {  //Check to make sure input is valid
    let answer = " ";
    let final = "Math.pow(a, 2) + Math.pow(b, 2) = Math.pow(c, 2)";
    let legA = 0;
    let legB = 0; 
    let result = " ";
    legA = parseInt(sideA.value);
    legB = parseInt(sideB.value);  //User enters numbers  //User enters numbers
    
    if (legA <= 0 || legB <= 0) {
        answer = " ";
        hypotenuse.innerText = answer; // Outputs a blank response
        result = "Please enter positive values only";
        message.innerText = result;
        
    } else {
        answer = Math.sqrt(legA*legA + legB*legB);
        result = " ";
        hypotenuse.innerText = answer;
        message.innerText = result;  //Outputs a blank response if not a triple
        
        if (legA %1 === 0 && legB %1 === 0 && answer %1 === 0) {
        result = "Congratulations!  You have found a Pythagorean Triple!!  A Pythagorean triple consists of three positive integers a, b, and c, such that a^2 + b^2 = c^2.  A triangle whose side lengths are a Pythagorean triple is a right triangle and called a Pythagorean triangle."  
        message.innerText = result;
    }
}
}

function render() {  
   checkValues();
   
}
submitBtn.addEventListener("click", function () {
    render();
});