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

// function shuffle(array) {
//   let currentIndex = array.length
//   , temporaryValue
//   , randomIndex
//   ;
//
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const shuffled = shuffle(cards);
// const shuffledAgain = shuffle(image);

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

})
