'use strict';

const images = [
  {image: './images/sheldon.jpeg' },
  {image: './images/leonard.jpg' },
  {image: './images/penny.jpg' },
  {image: './images/howard.jpg' },
  {image: './images/stuart.jpg' },
  {image: './images/wil.jpg' },
  {image: './images/amy.jpg' },
  {image: './images/raj.jpg' },
  {image: './images/bernadette.jpg' },
  {image: './images/proton.jpg' },
];

const board = document.querySelector('.board');


//creates card
const createCard = (card) => {
  return `
  <div class="card" data-id=${card}>
  </div>`
};

images.forEach((image) => {
  board.innerHTML += createCard(image['image']);
});


//checks if it's a pair
const pair = (first, second) => {
  return first === second;
}
