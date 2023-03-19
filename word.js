const words = ['mine', 'phone', 'man', 'dangerous', 'damage', 'compact', 'mascot', 'near', 'wednesday', 'world', 'envelope', 'owl', 'newborn', 'food', 'gender', 'dark', 'board', 'law','tennis','jackpot'];
let scrambledWord = '';
let chosenWord = '';

function newWord() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  scrambleWord(chosenWord);
}

function scrambleWord(word) {
  let letters = word.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = letters[i];
    letters[i] = letters[j];
    letters[j] = temp;
  }
  scrambledWord = letters.join('');
  document.querySelector('.scrambled-word').innerHTML = scrambledWord;
}

function checkGuess() {
  let guess = document.querySelector('.user-input').value;
  if (guess === chosenWord) {
    document.querySelector('.message').innerHTML = 'Correct!🎉🥳🎊';
    document.querySelector('body').style.backgroundColor = '#';
  } else {
    document.querySelector('.message').innerHTML = 'Sorry, try again.';
  }
}


function restartGame() {
  document.querySelector('.user-input').value = '';
  document.querySelector('.message').innerHTML = '';
}


function reshuffleWord() {
  scrambleWord(chosenWord);
}

document.querySelector('.reshuffle-btn').addEventListener('click', reshuffleWord);
document.querySelector('.restart').addEventListener('click', restartGame);


