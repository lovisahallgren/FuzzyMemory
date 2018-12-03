

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

const gameBoard = document.querySelector('.board');
const restartButton = document.querySelector('.replay-button');

for (let i = 0; i < images.length; i++) {
  gameBoard.innerHTML += createCards(images, i);
}

//spread operator - gives back an array instead of a node list
let idArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
let first, second;
let isFlipped, disable = false;
const cards = [...document.querySelectorAll('.card')];
const flippedCards = [...document.querySelectorAll('.flipped')];

shuffle(idArray);

cards.forEach((card, i) => {
  card.addEventListener('click', handleClick);
  let randomNumber = idArray[i];
  let randomImage = images[randomNumber];
  card.dataset.id = randomNumber;
  flippedCards[i].setAttribute("src", randomImage.img);
});

restartButton.addEventListener('click', () => {
  location.reload();
})
