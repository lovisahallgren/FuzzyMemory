'use strict';

const cards = [
  {
    id: 'bild1',
    img: './images/sheldon.jpeg'
  },
  { id: 'bild2',
    img: './images/leonard.jpg'
  },
  {
    id: 'bild3',
    img: './images/penny.jpg'
  },
  {
    id: 'bild4',
    img: './images/howard.jpg'
  },
  {
    id: 'bild5',
    img: './images/stuart.jpg'
  },
  {
    id: 'bild6',
    img: './images/wil.jpg'
  },
  {
    id: 'bild7',
    img: './images/amy.jpg'
  },
  {
    id: 'bild8',
    img: './images/raj.jpg'
  },
  {
    id: 'bild9',
    img: './images/bernadette.jpg'
  },
  {
    id: 'bild10',
    img: './images/proton.jpg'
  },
];

// const board = document.querySelector('.board');

const cardElements = [...document.querySelectorAll('.card')];
const image = [...document.querySelectorAll('.image')]
const length = cards.length;

cardElements.forEach((card, i) => {
  (card.dataset.id = i % length)
  image[i].setAttribute("src", (cards[i % length].img));

  card.addEventListerner('click', handleClick);

  // function handleClick() {
  //   console.log('i was clicked' + card.dataset.id);
  // }



})





//checks if it's a pair
// const pair = (first, second) => {
//   return first === second;
// }
