"use strict"

//Code for math fact of the day API //

const mathFactElement = document.querySelector(".fact-text");

async function getRandom() {
    try {
        const res = await fetch("http://numbersapi.com/random/math?json");
        const data = await res.json()
        console.log(data);
        mathFactElement.innerText = data.text;
    } catch (error) {
        console.log(error);
    }
}

getRandom();






