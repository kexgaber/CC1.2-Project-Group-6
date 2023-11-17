/*
Author : Keanan Gabertan
Date   : 3 November 2023
Group  : 6
*/

"use strict";

const habitatBtn = document.getElementById('habitat-btn');
const dietBtn = document.getElementById('diet-btn');
const fastfastsBtn = document.getElementById('fastfacts-btn');
const contentDiv = document.getElementById('content');

dietBtn.addEventListener('click',openDiet);
fastfastsBtn.addEventListener('click',openFastFacts);
habitatBtn.addEventListener('click',openHabitat);

// these function will change the classes on the buttons and load new content
function openHabitat(){
    if (dietBtn.classList.toggle("disabled") === true){
        dietBtn.classList.toggle("disabled");
    }
    if (fastfastsBtn.classList.toggle("disabled") === true){
        fastfastsBtn.classList.toggle("disabled");
    }
    habitatBtn.classList.toggle("disabled");

    const newHeader = document.createElement("h2");
    newHeader.innerText = "Habitat"
    contentDiv.replaceChild(newHeader, contentDiv.childNodes[1]);

    const newContent = document.createElement("p");
    newContent.innerHTML = `
    Sea Otters live in kelp forests. Giant kelp plants form dense forests that provide food and shelter for many plants and animals. 
    `;
    contentDiv.replaceChild(newContent, contentDiv.childNodes[3]);
}

function openDiet(){

    if (habitatBtn.classList.toggle("disabled") === true){
        habitatBtn.classList.toggle("disabled");
    }
    if (fastfastsBtn.classList.toggle("disabled") === true){
        fastfastsBtn.classList.toggle("disabled");
    }
    dietBtn.classList.toggle("disabled");

    const newHeader = document.createElement("h2");
    newHeader.innerText = "Diet"
    contentDiv.replaceChild(newHeader, contentDiv.childNodes[1]);

    const newContent = document.createElement("ul");
    newContent.innerHTML = `
    <li>Crabs</li>
    <li>Snails</li>
    <li>Urchins</li>
    <li>Clams</li>
    <li>Fish</li>
    `;
    contentDiv.replaceChild(newContent, contentDiv.childNodes[3]);
}

function openFastFacts(){
    if (habitatBtn.classList.toggle("disabled") === true){
        habitatBtn.classList.toggle("disabled");
    }
    if (dietBtn.classList.toggle("disabled") === true){
        dietBtn.classList.toggle("disabled");
    }
    fastfastsBtn.classList.toggle("disabled");

    const newHeader = document.createElement("h2");
    newHeader.innerText = "Fast Facts"
    contentDiv.replaceChild(newHeader, contentDiv.childNodes[1]);

    const newContent = document.createElement("ul");
    newContent.innerHTML = `
    <li><b>Size</b></li>
    <p>50-100 lbs, up to 5 ft in length</p>
    <li><b>Lifespan</b></li>
    <p>15-20 years</p>
    <li><b>Predators</b></li>
    <p>Killer whales and bald eagles</p>
    <li><b>Reproduction</b></li>
    <p>1 pup per year</p>
    `;
    contentDiv.replaceChild(newContent, contentDiv.childNodes[3]);
}

