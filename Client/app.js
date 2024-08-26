// Connecting to the WebSocket server at localhost on port 8080
const ws = new WebSocket('ws://localhost:8080');

// Grabbing elements from the DOM so I can manipulate them later
const gameBoard = document.getElementById('game-board');
const playerAControls = document.getElementById('player-a-controls');
const playerBControls = document.getElementById('player-b-controls');
const gameStatus = document.getElementById('game-status');
const currentTurnDisplay = document.getElementById('current-turn');
const timerDisplay = document.getElementById('timer');
const playerAScoreDisplay = document.getElementById('player-a-score');
const playerBScoreDisplay = document.getElementById('player-b-score');

// Variables to keep track of time, scores, and state of the game
let timer;
let timeLeft = 15;
let gameState = null;
let playerAScore = 0;
let playerBScore = 0;
let playerAName = "Player A";
let playerBName = "Player B";

// Loading up some sound files for click and score actions
const clickSound = new Audio('sounds/click.wav'); // Just assuming the click sound is here
const scoreSound = new Audio('sounds/score.wav'); // Same with the score sound

// Function to play click sound when something is clicked
const playClickSound = () => {
    clickSound.play();
};

// Function to play score sound when someone scores
const playScoreSound = () => {
    scoreSound.play();
};

// Function to play remove sound (this looks like it's not being used, but keeping it just in case)
const playRemoveSound = () => {
    removeSound.play();
};

// Setting up the game board with the initial state
const initializeBoard = (state) => {
    gameBoard.innerHTML = ''; // Clearing out the board first
    for (let i = 0; i < 5; i++) { // Looping through 5x5 grid
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell'; // Setting up grid cells
            if (state.grid[i][j]) { // If there's something in the cell
                cell.textContent = state.grid[i][j]; // Put the value in the cell
                const player = state.grid[i][j].split('-')[0]; // Get the player from the value
                cell.classList.add(player === 'A' ? 'player-a' : 'player-b'); // Add class depending on player
            }
            gameBoard.appendChild(cell); // Add the cell to the board
        }
    }
    updateGameStatus(state); // Updating the game status display
    updateCurrentTurn(state.turn); // Updating whose turn it is
    resetTimer(); // Start the timer again
};

// Handling messages that come from the server
ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.type === 'state') { // If the message is a game state update
        initializeBoard(message.state); // Initialize the board with the new state
        togglePlayerControls(message.state.turn); // Show the right controls for the current player
    } else if (message.type === 'error') { // If there's an error
        displayError(message.message); // Display it to the user
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Set up initial positions (this part could be expanded)
    const initialPositions = [
        { id: 'piece1', position: [0, 0] },
        { id: 'piece2', position: [0, 1] },
        // ... and so on for other pieces
    ];

    // Function to update the score when someone wins
    function updateScores(winner) {
        if (winner === 'A') {
            playerAScore++; // Increment Player A's score
        } else if (winner === 'B') {
            playerBScore++; // Increment Player B's score
        }
        // Update the score displays with the new values
        playerAScoreDisplay.querySelector('span').textContent = playerAScore;
        playerBScoreDisplay.querySelector('span').textContent = playerBScore;
        playScoreSound(); // Play that score sound!
    }

    // Asking for player names at the start of the game
    function askPlayerNames() {
        playerAName = prompt("Enter the name of Player A:", "Player A");
        playerBName = prompt("Enter the name of Player B:", "Player B");

        // Update the display with the player names and their scores
        playerAScoreDisplay.textContent = `${playerAName}: ${playerAScore}`;
        playerBScoreDisplay.textContent = `${playerBName}: ${playerBScore}`;
        currentTurnDisplay.textContent = `Current Turn: ${playerAName}`;
    }

    // Function to add moves to the history log
    function updateMoveHistory(playerName, move) {
        const moveHistory = document.getElementById('move-history');
        const moveEntry = document.createElement('div');
        moveEntry.textContent = `${playerName}: ${move}`; // Add player name and move to the history
        moveHistory.appendChild(moveEntry); // Add this entry to the history section
        playClickSound(); // Play click sound when move history is updated
    }

    // Prompting for player names as soon as the page loads
    askPlayerNames();

    // Initialize the game board when the page is ready
    // Any additional game setup logic could go here

    // Function to send the move to the server
    const sendMove = (command) => {
        const player = playerAControls.style.display === 'block' ? 'A' : 'B';
        const playerName = player === 'A' ? playerAName : playerBName;
        ws.send(JSON.stringify({ type: 'move', player, character: command.split(':')[0], direction: command.split(':')[1] }));
        currentTurnDisplay.textContent = `Current Turn: ${playerName}`;
        updateMoveHistory(playerName, command);
        resetTimer(); // Reset the timer after making a move
    };

    document.addEventListener('DOMContentLoaded', () => {
        resetTimer();
    });

    // Adding event listeners to all move buttons
    document.querySelectorAll('.move-btn').forEach(button => {
        button.addEventListener('click', () => {
            const command = button.getAttribute('data-move');
            const [character, direction] = command.split(':');
            const moveDescription = `${playerAControls.style.display === 'block' ? playerAName : playerBName} moved ${character} ${getMoveDescription(direction)}`;
            sendMove(command);

            // Add the move to the move history
            const historyDiv = document.getElementById('move-history');
            const moveParagraph = document.createElement('p');
            moveParagraph.textContent = moveDescription;
            historyDiv.appendChild(moveParagraph);

            resetTimer(); // Reset the timer after a move
        });
    });
});

// Function to switch the controls to the current player
const togglePlayerControls = (currentTurn) => {
    if (currentTurn === 'A') {
        playerAControls.style.display = 'block';
        playerBControls.style.display = 'none';
        currentTurnDisplay.textContent = `Current Turn: ${playerAName}`;
    } else {
        playerAControls.style.display = 'none';
        playerBControls.style.display = 'block';
        currentTurnDisplay.textContent = `Current Turn: ${playerBName}`;
    }
};

// Displaying the current time (for when the game ends)
const displayCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    const currentTimeDisplay = document.getElementById('current-time');
    currentTimeDisplay.textContent = `Game ended at: ${currentTime}`;
};

// Hiding the current turn and timer display when needed
const hideCurrentTurnAndTimer = () => {
    const currentTurnDisplay = document.getElementById('current-turn');
    const timerCapsule = document.getElementById('timer');
    if (currentTurnDisplay) {
        currentTurnDisplay.style.display = 'none';
    }
    if (timerCapsule) {
        timerCapsule.style.display = 'none';
    }
};

// Updating the game status text based on the current game state
const updateGameStatus = (state) => {
    let statusText = `Current Turn: Player ${state.turn}`;
    if (state.winner) { // If someone won
        statusText = `Game Over! Player ${state.winner} wins!`;
        updateCurrentTurn(`Player ${state.winner} wins!`);
        clearInterval(timer); // Stop the timer since the game is done
        updateScores(state.winner);
        displayCurrentTime(); // Show when the game ended
        hideCurrentTurnAndTimer(); // Hide the turn and timer display
    }
    gameStatus.textContent = statusText; // Update the game status display
};

// Updating the current turn display with the player's name
const updateCurrentTurn = (turn) => {
    const playerName = turn === 'A' ? playerAName : playerBName;
    currentTurnDisplay.textContent = `Current Turn: ${playerName}`;
};

// Displaying errors in the game status section if something goes wrong
const displayError = (message) => {
    gameStatus.textContent = `Error: ${message}`;
};

// Converting direction codes into more readable text
const getMoveDescription = (direction) => {
    switch (direction) {
        case 'F': return 'forward';
        case 'B': return 'backward';
        case 'L': return 'left';
        case 'R': return 'right';
        case 'FL': return 'forward-left';
        case 'FR': return 'forward-right';
        case 'BL': return 'backward-left';
        case 'BR': return 'backward-right';
        default: return 'unknown direction';
    }
};

// Resetting the timer back to the start for each turn
const resetTimer = () => {
    clearInterval(timer);
    timeLeft = 30; // Starting with 30 seconds
    timerDisplay.innerHTML = '<div id="timer-bar"></div>'; // Resetting the timer bar display
    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) { // If time runs out
            clearInterval(timer);
            switchTurn(); // Switch to the next player's turn
        }
    }, 1000);
};

// Switching the turn to the other player
const switchTurn = () => {
    const currentTurn = playerAControls.style.display === 'block' ? 'A' : 'B';
    const nextTurn = currentTurn === 'A' ? 'B' : 'A';
    togglePlayerControls(nextTurn); // Show the right controls for the next player
    updateCurrentTurn(nextTurn); // Update the turn display
    resetTimer(); // Start the timer for the new turn
};

// Updating the score display when someone wins
const updateScores = (winner) => {
    if (winner === 'A') {
        playerAScore++;
        playerAScoreDisplay.textContent = `${playerAName}: ${playerAScore}`;
    } else if (winner === 'B') {
        playerBScore++;
        playerBScoreDisplay.textContent = `${playerBName}: ${playerBScore}`;
    }
    playScoreSound(); // Play the score sound when the score updates
};

// Toggling the display of the rules when the "Show/Hide Rules" button is clicked
document.getElementById('toggle-rules').addEventListener('click', () => {
    const rules = document.getElementById('rules');
    const toggleButton = document.getElementById('toggle-rules');
    
    if (rules.style.display === 'none' || rules.style.display === '') {
        rules.style.display = 'block'; // Show the rules
        toggleButton.textContent = 'Hide Rules';
    } else {
        rules.style.display = 'none'; // Hide the rules
        toggleButton.textContent = 'Show Rules';
    }
});
