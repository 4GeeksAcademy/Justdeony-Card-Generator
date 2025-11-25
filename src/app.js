import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  //write your code here
  const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  const cardSuits = ['♥', '♦', '♠', '♣'];

  // Random number/value
  let valueIndex = Math.floor(Math.random() * cardValues.length);
  let randomValue = cardValues[valueIndex];

  // Random suit
  let suitIndex = Math.floor(Math.random() * cardSuits.length);
  let randomSuit = cardSuits[suitIndex];

  // querySelectorAll('.suit') → selects both top and bottom suits forEach → loops through them s.innerHTML = randomSuit → sets the suit symbol dynamically
  const suits = document.querySelectorAll('.suit');
  suits.forEach(s => s.innerHTML = randomSuit);
  
  //A boolean that groups which card should have the color red
  const isRed = (randomSuit === '♥' || randomSuit === '♦');
  
  // Select the middle value container.
  const cardValue = document.querySelector('.card-value');
  cardValue.innerHTML = randomValue;

  // Connects with the boolean for it to decide the color of the suit.
  suits.forEach(s => s.style.color = isRed ? 'red' : 'black');
  cardValue.style.color = isRed ? 'red' : 'black';


};

window.onload = function() {
  generateCard();
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', generateCard);
