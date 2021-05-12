'use strict';
var scores, roundScore, activePlayer, dice;

//DOM Access and manipulation
// 1.
function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
//.getElemntById('idName') Use for ids
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
}

// 2.
/*.addEventListner(param 1, param 2)
We use annonymous function, because of that we use param 2 as a function itself*/
document.querySelector('.btn--roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if(dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }else{
        //Next Player
        nextPlayer();

    }
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    //Add CURRENT score to GLOABL score
    scores[activePlayer] += roundScore;
    //Update UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

    //Check if Player won the game
    if(scores[activePlayer] >= 10){
        document.querySelector('#name--' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--'+ activePlayer).classList.add('player--winner')
        document.querySelector('.player--'+ activePlayer).classList.remove('player --active')
    }else{
        //nextPlayer
        nextPlayer();
    }

});

document.querySelector('.btn--new').addEventListener('click', function(){
    init();
});

function nextPlayer(){
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
}




// dice = Math.floor(Math.random() * 6) + 1;

// /*document.querySelcector('.className or #idName or anyOther') this use for
// connnet with DOM*/
// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>'+ dice +'</em>';

// function btn(){
//     //Type here
// }
// btn(); // Call it here