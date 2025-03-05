"use strict"
// Code for Desmos Calculator//
  var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt);

 // var elt = document.getElementById('my-calculator');
 // var calculator = Desmos.GraphingCalculator(elt);

 //Code Snippet from Numbers API
 const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://numbersapi.p.rapidapi.com/1729/math');
xhr.setRequestHeader('x-rapidapi-key', '683316b4d9mshcaba3263dad5228p173f27jsna61933234ee3');
xhr.setRequestHeader('x-rapidapi-host', 'numbersapi.p.rapidapi.com');

xhr.send(data);