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
let first, second;


cardElements.forEach((card, i) => {
  (card.dataset.id = i % length)
  image[i].setAttribute("src", (cards[i % length].img));

  const cardId = card.dataset.id;

  card.addEventListener('click', handleClick);

  function handleClick() {
    card.classList.add('clicked');
    first = second;
    second = cardId;

    if (first == cardId) {
      let matches = document.querySelectorAll(`[data-id="${first}"]`);
      matches.forEach((match) => {
        match.classList.add('matched')
      })
    } else if (first !== cardId && second !== first) {
      let notMatches = document.querySelectorAll(`[data-id="${first}"]`);
      notMatches.forEach((noMatch) => {
        noMatch.classList.remove('clicked');
      })
    }
  }


  // const pair = (first, second) => {
  //   return first === second;
  //   // return card.classList.add('matched');
  // }



})





//checks if it's a pair
// const pair = (first, second) => {
//   return first === second;
// }
