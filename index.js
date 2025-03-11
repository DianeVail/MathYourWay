"use strict"
// Code for Desmos Calculator//
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);


 
 //Code for math fact of the day API //
 //This does not work yet
 $.get('http://numbersapi.com/5/math', function(data) {
	$('#number').text(data);
});

 //Code for Pythagorean Theorem function

 function checkValues() {  //Check to make sure input is valid
    
    if (a <=0 || b <=0) {
        console.log("Side lengths must be greater than zero");
    } 
	
}
//  function for inputing values and calculating hypotenuse 
function computeValues {
	let c = sqrt(a^2 + b^2)
	console.log(c);
}
submissionBtn.addEventListener("click", function () {
    checkValues;
});

 	