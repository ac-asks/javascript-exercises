/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;// keeps track of player currently playing


// method to select element from our webpage
//THIS IS A SETTER
//document.querySelector('#current-' + activePlayer).textContent = dice;// css uses hash symbol to select ids
// textContent changes the text in this element
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// Reads value / content of the element and store into variable x
//THIS IS A GETTER
//var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none'; // to select class use a .
document.getElementById('score-0').textContent = '0'; // default score to 0
document.getElementById('score-1').textContent = '0'; // default score to 0
document.getElementById('current-0').textContent = '0'; // default score to 0
document.getElementById('current-1').textContent = '0'; // default score to 0

// make click cause dice roll
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1 When someone clicks, first, we need a random number
    // get random dice number (floor removes the decimals)
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2 Then we need to display the result
    var diceDOM = document.querySelector('.dice'); // element we select
    // Make display visible (we hid it above) - bring sttyle back to css block
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; // display respective dice image

    // 3 Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        // below: let it equal roundScore to display it back into roundScore
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        // If active player is 0, the change to next player active player 1, 
        // Otherwise, active player should become active player 0
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // change grey panel to ACTIVE PLAYER
        // This REMOVES AND ADDS A CLASS FROM ONE HTML PART TO ANOTHER
        // pass in the class that we want to remove i.e. active
        //
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        // SO THERE IS ACTUALLY A METHOD CALLED TOGGLE THAT HANDLES ALL OF THIS FOR US
        // toggle adds to the class if its not there, if it is there, it removes it
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // Hide dice when we hit a 1
        document.querySelector('.dice').style.display = 'none';
    }
});