console.log('hi');

// function to get user input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    // test whether user entered correct selection
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error');
    }
};

// function to gets computer input
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

// function that determines the winner between user and computer
const determineWinner = (userChoice, computerChoice) => {
    // check to see if user chose 'bomb'
    if (userChoice === 'bomb') {
        return 'User Won';
    }
    
    // check to see if game is a tie
    if (userChoice === computerChoice) {
        return 'Tie Game';
    }

    // check to see if user chose 'rock'
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Won';
        } else {
            return 'User Won';
        }
    }

    // check to see if user chose 'paper'
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer Won';
        } else {
            return 'User Won';
        }
    }

    // check to see if user chose 'scissors'
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer Won';
        } else {
            return 'User Won';
        }
    }
};

// function to start the game and log the results
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
