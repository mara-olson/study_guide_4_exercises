"use strict";

/** ********************
 Make an Event Handler
********************* */

const popUpButton = document.querySelector("#popup-alert-button");

// function alertOnClick() {
// alert("This is an alert!");
// }

popUpButton.addEventListener("click", () => alert("This is a new alert!"));

/** ***********************
Practice Your Times Tables
************************ */

const timesTableButton = document.querySelector("#multiplying-form");

timesTableButton.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const multipleSelected = Number(document.querySelector("#mults-of").value);

  const multiplesArray = [];

  const totalMultiples =
    Number(document.querySelector("#max").value) / multipleSelected;

  for (let i = 1; i <= totalMultiples; i += 1) {
    multiplesArray.push(i * multipleSelected);
  }

  console.log(multipleSelected, totalMultiples, multiplesArray);
});

/** **************
An Agreeable Form
*************** */

document.querySelector("#agreeable-form").addEventListener("submit", (evt) => {
  evt.preventDefault();

  const favFoodEntry = document.querySelector("#favorite-food-input").value;

  document.querySelector(
    "#agreeable-text"
  ).textContent = `I like ${favFoodEntry}, too!`;
});

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = [
  "orange",
  "midnightblue",
  "darkgoldenrod",
  "green",
  "purple",
];

// const PRIME_NUMBERS = [];

function isPrime(x) {
  for (let i = 2; i * i <= x; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function createPrimes() {
  let num = 2;
  let numFound = 0;

  document.querySelector("#prime-circle-area").innerHTML = "";

  while (numFound < 5) {
    if (isPrime(num)) {
      const circleArea = document
        .querySelector("#prime-circle-area")
        .insertAdjacentHTML(
          "beforeend",
          `<div class='prime-circle' style='background-color: ${PRIME_COLORS[numFound]}'>${num}</div>`
        );
      numFound += 1;
    }
    num += 1;
  }
}

document
  .querySelector("#make-prime-circles")
  .addEventListener("click", createPrimes);
// Your Code Here

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector("#puppies-go-here");
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML(
    "beforeend",
    `<img src=${puppyURL} alt="puppy-image">`
  );
}

// Your Code Here
