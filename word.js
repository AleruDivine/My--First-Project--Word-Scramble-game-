const words = ['javascript', 'html', 'css', 'react', 'angular', 'vue', 'node', 'express', 'mongo', 'sql'];
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
  document.getElementById('scrambled-word').innerHTML = scrambledWord;
}

function checkGuess() {
  let guess = document.getElementById('user-input').value;
  if (guess === chosenWord) {
    document.getElementById('message').innerHTML = 'Congratulations, you got it right!';
  } else {
    document.getElementById('message').innerHTML = 'Sorry, try again.';
  }
}