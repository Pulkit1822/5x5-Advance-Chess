# 5x5 Advanced Chess Game Client Side


Welcome to the 5x5 Advanced Chess Game! This project is a turn-based, chess-like game with a server-client architecture, utilizing WebSockets for real-time communication and a web-based user interface. The game is designed to be both fun and visually appealing, with several bonus challenges and features to enhance the user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Technical Requirements](#technical-requirements)
- [Bonus Challenges](#bonus-challenges)
- [Prerequisites](#prerequisites)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Interactive Game Board**: A 5x5 grid-based chess board with smooth animations and transitions.
- **Player Controls**: Separate controls for Player A and Player B to make moves.
- **Real-time Updates**: WebSocket integration for real-time game state updates.
- **Sound Effects**: Click and score sounds to enhance the gaming experience.
- **Dynamic Title**: The game title changes color dynamically for a fun visual effect.
- **Move History**: A log of all moves made during the game.
- **Timer**: A countdown timer for each player's turn.
- **Responsive Design**: The game is designed to be visually appealing and user-friendly on various devices.
- **Bonus Challenges**: Additional features and challenges to make the game more engaging.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

  ```bash
  git clone https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602.git
  ```

2. **Install dependencies:**

  ```bash
  npm install
  ```

3. **Start the server:**

  ```bash
  node server/server.js
  ```

4. **Open the game in your browser:**

  ```plaintext
  http://localhost:8080
  ```

## Usage

1. **Open the game in your browser.**
2. **Enter the names of Player A and Player B when prompted.**
3. **Use the controls to make moves for each player.**
4. **Follow the game status and timer to keep track of the game progress.**
5. **Check the move history to review past moves.**

## Game Rules

### Game Setup

1. The game is played between two players on a 5x5 grid.
2. Each player controls a team of 5 characters, which can include Pawns, Hero1, and Hero2.
3. Players arrange their characters on their respective starting rows at the beginning of the game.

### Characters and Movement

- **Pawn (P)**: Moves one block in any direction (Left, Right, Forward, or Backward).
  - Move commands: L (Left), R (Right), F (Forward), B (Backward)
- **Hero1 (H1)**: Moves two blocks straight in any direction. Kills any opponent's character in its path.
  - Move commands: L (Left), R (Right), F (Forward), B (Backward)
- **Hero2 (H2)**: Moves two blocks diagonally in any direction. Kills any opponent's character in its path.
  - Move commands: FL (Forward-Left), FR (Forward-Right), BL (Backward-Left), BR (Backward-Right)

### Game Flow

- **Initial Setup**:
  - Players deploy all 5 characters on their starting row in any order.
  - Character positions are input as a list of character names, placed from left to right.
  - Players can choose any combination of Pawns, Hero1, and Hero2 for their team.
- **Turns**:
  - Players alternate turns, making one move per turn.
- **Combat**:
  - If a character moves to a space occupied by an opponent's character, the opponent's character is removed from the game.
  - For Hero1 and Hero2, any opponent's character in their path is removed, not just the final destination.
- **Invalid Moves**:
  - Moves are considered invalid if:
   - The specified character doesn't exist.
   - The move would take the character out of bounds.
   - The move is not valid for the given character type.
   - The move targets a friendly character.
  - Players must retry their turn if they input an invalid move.
- **Game State Display**:
  - After each turn, the 5x5 grid is displayed with all character positions.
  - Character names are prefixed with the player's identifier and character type (e.g., A-P1, B-H1, A-H2).
- **Winning the Game**:
  - The game ends when one player eliminates all of their opponent's characters.
  - The winning player is announced, and players can choose to start a new game.

## Technical Requirements

### Server

- Implement the core game logic as described in the original rules.
- Set up a WebSocket server to handle client connections and game events.
- Process move commands received from clients and update the game state accordingly.
- Broadcast updated game state to all connected clients after each valid move.

### WebSocket Communication

- Implement the following event types:
  - Game initialization
  - Player move
  - Game state update
  - Invalid move notification
  - Game over notification

### Web Client

- Create a responsive web page that displays:
  - A 5x5 grid representing the game board
  - Current game state with characters positioned on the board
  - Player turn indication
  - Move history (Optional)
- Implement interactive features:
  - Clickable character pieces for the current player
  - Display valid moves as buttons when a character is selected below the grid.
  - Send move commands to the server when a valid move is chosen
- Handle and display server responses, including invalid move notifications and game over states

### User Interface Requirements

- Display the 5x5 game board with clear differentiation between empty cells and character positions.
- Use distinct visual representations for each player's characters (e.g., different colors or prefixes as in the original requirements).
- When a player selects their character, highlight valid move options as clickable buttons below the game board.
- Show the current player's turn prominently.
- Display a move history or log.
- Implement a game over screen showing the winner and offering an option to start a new game.

## Bonus Challenges

1. **Replay System**: Implement a replay system that allows players to review past games move by move. The replay system provides a detailed history of each move, including the move itself, the player who made the move, and the timestamp of the move. Players can easily navigate through the replay and analyze the game to improve their strategies. The replay system is accessible through the "Move History" page in the application.

2. **Ranking System**: Add a ranking system that tracks player performance across multiple games. The ranking system assigns a score to each player based on their performance in each game. The score is calculated by considering factors such as the number of wins, the number of pins held by a player, and the overall gameplay performance. The ranking system provides a fair and competitive environment for players to strive for the top position on the leaderboard.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A modern web browser (Chrome, Firefox, Safari, etc.)

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- **Font Awesome**: For providing the icons used in the game.
- **Google Fonts**: For the Gotham font used in the game.
