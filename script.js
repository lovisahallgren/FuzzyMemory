'use strict';

const images = [
  {
    img: "images/sheldon.jpeg"
  },
  {
    img: "images/leonard.jpg"
  },
  {
    img: "images/penny.jpg"
  },
  {
    img: "images/howard.jpg"
  },
  {
    img: "images/stuart.jpg"
  },
  {
    img: "images/wil.jpg"
  },
  {
    img: "images/amy.jpg"
  },
  {
    img: "images/raj.jpg"
  },
  // {
  //   img: "images/bernadette.jpg"
  // },
  // {
  //   img: "images/proton.jpg"
  // },
];

const createCards = (array, i) => {
  return `
  <div class="card" data-id="">
    <img class="default" src="./images/bigbang.jpg">
    <img class="flipped" src="">
  </div>

  <div class="card" data-id="">
    <img class="default" src="./images/bigbang.jpg">
    <img class="flipped" src="">
  </div> `
}

const gameBoard = document.querySelector('.game-board');

for (let i = 0; i < images.length; i++) {
  gameBoard.innerHTML += createCards(images, i);
}

//spread operator
const cards = [...document.querySelectorAll('.card')];



console.log(cards);

// let idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
//
//
// const cardElements = [...document.querySelectorAll('.card')];
//
// const images = [...document.querySelectorAll('.image')];
//
// let first, second;
//
// function shuffle(array) {
//   let currentIndex = array.length,
//   temporaryValue, randomIndex;
//
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }
//
// shuffle(idArray);
//
// cardElements.forEach((card, i) => {
//   let randNum = idArray[i];
//   randomImage = cards[randNum].img;
//   images[i].setAttribute("src", randomImage);
//   card.dataset.id = randNum + 1;
//
//   card.addEventListener('click', function handleClick (event) {
//     card.classList.add('clicked');
//     cardId = card.dataset.id;
//     first = second;
//     second = cardId;
//
//     if (first == cardId) {
//       event.target.classList.toggle('matched');
//       let matches = document.querySelectorAll(`[data-id="${first}"]`);
//       matches.forEach(match => {
//         match.classList.add('matched');
//         match.classList.remove('clicked');
//         match.removeEventListener('click', handleClick)
//       })
//     } else if (first !== cardId && second !== first) {
//       let noMatches = document.querySelectorAll(`[data-id="${first}"]`);
//       noMatches.forEach((noMatch, i) => {
//         noMatch.classList.remove('clicked');
//       })
//     }
//   });
// });
