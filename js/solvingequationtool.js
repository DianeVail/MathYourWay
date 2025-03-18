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

function checkValues() { 
    legA = parseInt(valueA.value);//User enters numbers
    legB = parseInt(valueB.value); 
    legC = parseInt(valueC.value);  

    if (legA == 0) {      //Checks for Linear equation   
        result = "This is a linear equation where the slope is "+ legB +" and the y-intercept is " + legC;
        message.innerText = result;
    }
    if (legA > 0){  //Checks for a positive leading coeff.
        let roots = (legB * legB)-(4 * legA * legC);  //Checks for imaginary roots
            if (roots < 0){
            result = "The graph is a parabola that opens up, and the x-intercepts are imaginary";
            message.innerText = result;
            
            } else {  //Solves for x using the Quadriatic Formula                            
                intercept1 = (-legB + Math.sqrt(roots)) / 2 * legA;                
                intercept2 = (-legB - Math.sqrt(roots))/ 2 * legA;
                
                
            result = "The graph is a parabola that opens up, and the x-intercepts are "+intercept1+ " and "+intercept2;
            message.innerText = result;
            }
        } else if (legA < 0){//Checks for a negative leading coeff.
            let roots = (legB*legB) - (legA*legC*4);
                if (roots < 0){
                result = "The graph is a parabola that opens down, and the x-intercepts are imaginary";
                message.innerText = result;
            } else { //Solves for x using the Quadriatic Formula
                intercept1 = (-legB + Math.sqrt(roots)) / 2 * legA;                
                intercept2 = (-legB - Math.sqrt(roots))/ 2 * legA;
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
