// Create card divs
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

//Fisher Yates - shuffle function
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

// Function for turning around the cards
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

// Checks if the choosen cards are a match and in that case removes eventlistener
function match() {
  first.removeEventListener('click', handleClick);
  second.removeEventListener('click', handleClick);
  clear();
}

// If the cards aren't a match it removes the class flip
function notMatch() {
  disable = true;
  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');
    clear();
  }, 800)
}

// clears the previous clicks
function clear() {
  isFlipped = false;
  disable = false;
  first = null;
  second = null;
}

// function for the restart button
