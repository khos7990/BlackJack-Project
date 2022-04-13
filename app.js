//DOM Variables
const hitBtnEl = document.querySelector("#hitBTN");
const stayBtnEl = document.querySelector("#stayBTN");
const restartBtnEl = document.querySelector("#restartBTN");
const bodyEl = document.querySelector("body");
const playerCardHolder = document.querySelector(".playerOne_hands");
const dealerCardHolder = document.querySelector(".dealer_hands");
const cardCountEl = document.querySelector(".cardCount");
const dealerCardCountEl = document.querySelector('.dealerCardCount');
const resultEl = document.querySelector(".result");
const tableEl = document.querySelector(".table");
//Card Combinations
//joker?
const cardSymbols = ["h", "s", "d", "c"];
const cardValues = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
let randomPlayerCombination;
let randomPlayerValue;
let randomPlayerSymbol;

let randomDealerCombo;
let randomDealerValue;
let randomDealerSymbol;

let countTotal = 0;
let dealerCount = 0;
let startButton;
let smallWindow = window.matchMedia("(max-width: 1300px)");

//Sounds 
let cardEffect = new Audio('Whoosh_Sound_Effect.mp3')
let winnerAudio = new Audio ('winner.mp3');
winnerAudio.volume = 0.3;

//Functions


function randomPlayerCard() {
  randomPlayerSymbol =
    cardSymbols[Math.floor(Math.random() * cardSymbols.length)];
  randomPlayerValue = cardValues[Math.floor(Math.random() * cardValues.length)];
  randomPlayerCombination = randomPlayerSymbol + randomPlayerValue;

  if (randomPlayerValue === "J") {
    countTotal += 10;
  } else if (randomPlayerValue === "K") {
    countTotal += 10;
  } else if (randomPlayerValue === "Q") {
    countTotal += 10;
  } else if (randomPlayerValue === "A") {
    cardAce();
  } else {
    countTotal += parseInt(randomPlayerValue);
  }
}

function dealerCards() {
  randomDealerSymbol =
    cardSymbols[Math.floor(Math.random() * cardSymbols.length)];
  randomDealerValue = cardValues[Math.floor(Math.random() * cardValues.length)];
  randomDealerCombo = randomDealerSymbol + randomDealerValue;

  if (randomDealerValue === "J") {
    dealerCount += 10;
  } else if (randomDealerValue === "K") {
    dealerCount += 10;
  } else if (randomDealerValue === "Q") {
    dealerCount += 10;
  } else if (randomDealerValue === 'A') {
      if (dealerCount > 10) {
          dealerCount += 1
      } else {
          dealerCount += 11
      }
  } else {
    dealerCount += parseInt(randomDealerValue);
  }
}

function dealerHit() {
  let dealerCard = document.createElement("div");
  dealerCards();
  cardEffect.play();
  dealerCard.classList.add("card","cardPositioningDealer","large", 'shadow', randomDealerCombo);
  if (smallWindow.matches) {
    dealerCard.classList.remove('large');
    dealerCard.classList.add('small');
  }
  dealerCardHolder.append(dealerCard);
  dealerAutoHit();
}

function dealerAutoHit() {
  hitBtnEl.classList.add('buttonVisibility');
  stayBtnEl.classList.add('buttonVisibility');
  if (dealerCount === 21) {
    resultEl.innerHTML = "Dealer Wins!";
    setTimeout(gameDone, 2000);
    restartAnimation();
  } else if (dealerCount < 17) {
    setTimeout(dealerHit, 1000);
  } else if (dealerCount > 21) {
    winnerAudio.play();
    resultEl.innerHTML = "Dealer is Bust";
    setTimeout(gameDone, 2000);
    restartAnimation();
  } else {
    gameWinner();
  }
  dealerCardCountEl.innerText = ("Dealer's Hand: " + dealerCount);
}

function cardAce() {
  let aceCard1 = document.createElement("button");
  let aceCard11 = document.createElement("button");
  aceCard1.innerText = "1";
  aceCard11.innerText = "11";
  aceCard1.classList.add("aceOptionBtn");
  aceCard11.classList.add("aceOptionBtn11");
  playerCardHolder.append(aceCard1, aceCard11);
  hitBtnEl.classList.add('buttonVisibility');
  stayBtnEl.classList.add('buttonVisibility');

  aceCard1.addEventListener("click", function () {
    countTotal++;
    playerCount();
    aceCard1.remove();
    aceCard11.remove();
    hitBtnEl.classList.remove('buttonVisibility');
  stayBtnEl.classList.remove('buttonVisibility');
  });

  aceCard11.addEventListener("click", function () {
    countTotal += 11;
    playerCount();
    aceCard1.remove();
    aceCard11.remove();
    hitBtnEl.classList.remove('buttonVisibility');
  stayBtnEl.classList.remove('buttonVisibility');
  });
}

function playerCount() {
  if (countTotal === 21) {
    winnerAudio.play();
    resultEl.innerHTML = "WINNER!";
    setTimeout(gameDone, 2000);
    restartAnimation();
  } else if (countTotal > 21) {
    resultEl.innerHTML = "Bust, Dealer Wins!";
    setTimeout(gameDone, 2000);
    restartAnimation();
  } else {
  }
  cardCountEl.innerHTML = ("Player's Hand: " + countTotal);
}

function gameWinner() {
  if (countTotal > dealerCount) {
    winnerAudio.play();
    resultEl.innerHTML = "Player Wins!";
    setTimeout(gameDone, 2000);
    restartAnimation();
  } else if (dealerCount > countTotal) {
    resultEl.innerHTML = "Dealer Wins!";
    setTimeout(gameDone, 2000);
    restartAnimation();
  } else {
    resultEl.innerHTML = "DRAW";
    setTimeout(gameDone, 2000);
    restartAnimation();
  }
}

 //restart function FIX
    function restart () {
        resultEl.innerText = '';
        cardCountEl.innerText = '';
        playerCardHolder.innerHTML = '';
        restartBtnEl.classList.remove('restartAnimation');
        hitBtnEl.classList.remove('buttonVisibility');
        stayBtnEl.classList.remove('buttonVisibility');
        gameInitiation();     
    }

function gameDone() {
    cardCountEl.innerHTML = "";
    playerCardHolder.innerHTML='';
    dealerCardHolder.innerHTML='';
    dealerCardCountEl.innerText='';
    stayBtnEl.classList.add('buttonVisibility');
    hitBtnEl.classList.add('buttonVisibility');
    countTotal = 0;
    dealerCount = 0;
}

// function restartAnimation () {
//   restartBtnEl.classList.remove('buttonVisibility');
//   restartBtnEl.classList.add('restartAnimation');
//   hitBtnEl.classList.add('buttonVisibility');
//   stayBtnEl.classList.add('buttonVisibility');
// }

function gameInitiation () {
  startButton.classList.add('buttonVisibility');
  stayBtnEl.classList.add('buttonVisibility');
  hitBtnEl.classList.add('buttonVisibility');
  let card = document.createElement("div");
  randomPlayerCard();
  cardEffect.play();
  card.classList.add("card","cardPositioningP1","large",'shadow',randomPlayerCombination);
  if (smallWindow.matches) {
    card.classList.remove('large');
    card.classList.add('small');
  }
  playerCardHolder.append(card);
  playerCount();
  setTimeout(function () { 
  let card2 = document.createElement("div");
  randomPlayerCard();
  cardEffect.play();
  card2.classList.add("card","cardPositioningP1","large",'shadow',randomPlayerCombination);
  if (smallWindow.matches) {
    card2.classList.remove('large');
    card2.classList.add('small');
  }
  playerCardHolder.append(card2);
  playerCount();
  stayBtnEl.classList.remove('buttonVisibility');
  hitBtnEl.classList.remove('buttonVisibility');}, 1000) 
  
  }
  
  


//EVENT LISTENERS
hitBtnEl.addEventListener("click", function () {
  stayBtnEl.classList.remove('buttonVisibility');
  let card = document.createElement("div");
  randomPlayerCard();
  cardEffect.play();
  card.classList.add("card","cardPositioningP1","large",'shadow',randomPlayerCombination);
  if (smallWindow.matches) {
    card.classList.remove('large');
    card.classList.add('small');
  }
  playerCardHolder.append(card);
  playerCount();
});

stayBtnEl.addEventListener("click", dealerHit);

restartBtnEl.addEventListener('click', restart);

document.addEventListener('DOMContentLoaded', function () {
  startButton = document.createElement('button');
  startButton.classList.add('startButton');
  startButton.innerText = ('START');
  stayBtnEl.classList.add('buttonVisibility');
  hitBtnEl.classList.add('buttonVisibility');
  tableEl.append(startButton);
  startButton.addEventListener('click',gameInitiation);

})

