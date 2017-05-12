// conosle.log('working');

var win = document.getElementById('wins');

var losses = document.getElementById('losses');

var guessesLeft = document.getElementById('guessesLeft');

var guesses = document.getElementById('guesses');

var alphabet = [ 'a', 'b', 'c', 'd', 'e',
                  'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o',
                   'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y',
                   'z' ];

randomize();

document.onkeyup = function (press) {
	console.log(press.key);
	if (press.key === randomLetter) {
		console.log('match');
		win.innerHTML++;
		randomize();
		resetGuessesLeft();
		resetGuesses();
	}
	else{
		console.log('doesnt match');
		guessesLeft.innerHTML--;
		guesses.innerHTML += press.key;
		if (guessesLeft.innerHTML == 0) {
			losses.innerHTML++;
			randomize();
			resetGuessesLeft();
			resetGuesses();
		}
	}
}

function randomize(){
	 randomIndex = Math.floor(Math.random()*26);
	 randomLetter = alphabet[randomIndex];
	console.log(randomLetter);
}
function resetGuessesLeft(){
	guessesLeft.innerHTML = 10;
}
function resetGuesses(){
	guesses.innerHTML = '';
}
