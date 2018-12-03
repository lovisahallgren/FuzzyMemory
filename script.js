

const images = [{
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

function createCards(array, i) {
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

//Fisher Yates
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const gameBoard = document.querySelector('.game-board');

for (let i = 0; i < images.length; i++) {
  gameBoard.innerHTML += createCards(images, i);
}

//spread operator - gives back an array instead of a node list
let idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
let first, second;
let isFlipped, disable = false;
const cards = [...document.querySelectorAll('.card')];
const flippedCards = [...document.querySelectorAll('.flipped')];

function handleClick() {
  if (disable || this === second) return
  this.classList.add('flip');
  if (!isFlipped) {
    isFlipped = true;
    first = this;
    return
  }
  second = this;
  first.dataset.id === second.dataset.id ? match() : notMatch();
}

function match() {
  first.removeEventListener('click', handleClick);
  second.removeEventListener('click', handleClick);
  clear();
}

function notMatch() {
  disable = true;
  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');
    clear();
  }, 800)
}

function clear() {
  isFlipped = false;
  disable = false;
  first = null;
  second = null;
}

shuffle(idArray);

cards.forEach((card, i) => {
  card.addEventListener('click', handleClick);
  let randomNumber = idArray[i];
  let randomImage = images[randomNumber];
  //ger det vända kortet en bild från arrayen
  card.dataset.id = randomNumber;
  flippedCards[i].setAttribute("src", randomImage.img);
  //samma bild får samma id
});
