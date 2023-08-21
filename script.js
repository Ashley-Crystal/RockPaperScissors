let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

updateScore();

function playGame(move) {
    const comp = pickComp();

    let res = '';

    if (move === 'scissors') {
        if (comp === 'rock') {
            res = 'Lose';
        } else if (comp === 'paper') {
            res = 'Win';
        } else {
            res = 'Tie';
        }
    } else if (move === 'paper') {
        if (comp === 'rock') {
            res = 'Win';
        } else if (comp === 'paper') {
            res = 'Tie';
        } else {
            res = 'Lose';
        }
    } else if (move === 'rock') {
        if (comp === 'rock') {
            res = 'Tie';
        } else if (comp === 'paper') {
            res = 'Lose';
        } else {
            res = 'Win';
        }
    }

    if (res === 'Win') {
        score.wins += 1;
    } else if (res === 'Lose') {
        score.loses += 1;
    } else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = `You ${res}`;

    document.querySelector('.js-moves').innerHTML = `You picked <img src="images/${move}.png" class="rock">. Computer picked <img src="images/${comp}.png" class="rock">`;
}

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
}

let comp = '';

function pickComp() {
    const rand = Math.random();
    if (rand >= 0 && rand < 1 / 3) {
        comp = 'rock';
    } else if (rand >= 1 / 3 && rand < 2 / 3) {
        comp = 'paper';
    } else if (rand >= 2 / 3 && rand < 1) {
        comp = 'scissors';
    }
    return comp;
}
