"use strict"
const submitBtn = document.getElementById("submit-btn");  //Submit-btn
const valueA = document.getElementById("side-a");//input a
const valueB = document.getElementById("side-b");//input b
const valueC = document.getElementById("side-c");//input c
const answer = document.getElementById("intercepts");
const message = document.getElementById("message") //outputs a message

let result = "";
let legA = 0;
let legB = 0; 
let legC = 0;
let roots = "";
let intercept1 = "";
let intercept2 = "";

function checkValues() {  //  Still working on this
    legA = parseInt(valueA.value);
    legB = parseInt(valueB.value); 
    legC = parseInt(valueC.value); //User enters numbers 

    if (legA == 0) {        
        result = "This is a linear equation where the slope is "+ legB +" and the y-intercept is " + legC;
        message.innerText = result;
    }
    if (legA > 0){
        let roots = (legB*legB)-(legA*legC*4);
            if (roots < 0){
            result = "The graph is a parabola that opens up, and the x-intercepts are imaginary";
            message.innerText = result;
            } else {
                console.log(roots);
                console.log(legB);
                
                intercept1 = ((-legB)+(Math.sqrt(roots))/(4*legA))
                intercept2 = ((-legB)-(Math.sqrt(roots))/(4*legA))
                console.log(intercept1);
            result = "The graph is a parabola that opens up, and the x-intercepts are "+intercept1+ " and "+intercept2;
            message.innerText = result;
            }
        } else if (legA < 0){
            let roots = (legB*legB) - (legA*legC*4);
                if (roots < 0){
                result = "The graph is a parabola that opens down, and the x-intercepts are imaginary";
                message.innerText = result;
            } else {
                result = "The graph is a parabola that opens down, and the x-intercepts are "+intercept1+ " and "+intercept2;
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
