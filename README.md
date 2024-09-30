<p align="center">
  <a href="https://github.com/Pulkit1822/5x5-Advance-Chess">
    <img src="https://github.com/Pulkit1822/5x5-Advance-Chess/blob/main/content/logo.jpg" height="128">
  </a>

  <h1 align="center">5x5 Advanced Chess</h1>

  Welcome to the 5x5 Advanced Chess Game! This project is a turn-based, chess-like game with a server-client architecture, utilizing WebSockets for real-time communication and a web-based user interface. The game is designed to be both fun and visually appealing, with several bonus challenges and features to enhance the user experience.

  ## Table of Contents

  - [Overview](#overview)
  - [Workflow](#workflow-and-screenshots)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Game Rules](#game-rules)
  - [Technical Requirements](#technical-requirements)
  - [Bonus Challenges](#bonus-challenges)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

  ## Overview

  This project is a turn-based chess-like game implemented with a server-client architecture. The game features real-time communication using WebSockets and a web-based user interface. The primary focus is on implementing correct game logic, efficient network communication, and proper move validation on both client and server sides.

  ## Workflow and Screenshots

  ### Workflow

  1. **Game Initialization**: Players enter their names and set up their teams.
  2. **Game Play**: Players take turns making moves, with the game state updating in real-time.
  3. **Move Validation**: The server validates each move and updates the game state accordingly.
  4. **Game End**: The game ends when one player eliminates all of the opponent's pieces, and the winner is announced.

  ### Screenshots

  ![Entry](https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602/blob/main/Client/workflow/input1.png)
  *Description: The Game asking for the player names.*

  ![Entry](https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602/blob/main/Client/workflow/input2.png)
  *Description: The Game asking for the player names.*

  ![UI](https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602/blob/main/Client/workflow/ui.png)
  *Description: This shows how a simple UI is implemented*

  ![Guide](https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602/blob/main/Client/workflow/guide.png)
  *Description: This shows the rules of the game*

  ![Handling Edge Cases](https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602/blob/main/Client/workflow/edge.png)
  *Description: This shows the perfect implementation of handling edge cases*

  ![Move History](https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602/blob/main/Client/workflow/replay.png)
  *Description: The move history log showing all moves made during the game.*

  ![Game Over](https://github.com/Pulkit1822/Pulkit-Kumar-Mathur-21BCE11602/blob/main/Client/workflow/won.png)
  *Description: The game over screen showing the winner and options to start a new game.*

  ## Features

  ### Core Game Logic

  - **Correct Implementation of 5x5 Advanced Chess Rules**: The game strictly follows the rules of 5x5 advanced chess, ensuring an authentic and challenging experience.
  - **Real-Time Synchronization**: The game state is synchronized in real-time between the server and all connected clients, providing a seamless multiplayer experience.

  ### WebSocket Server

  - **Event Handling**: The server handles various game events such as game initialization, player moves, and game state updates.
  - **Real-Time Communication**: Ensures that all players receive updates instantly, maintaining the flow of the game.

  ### Web Interface

  - **Interactive Game Board**: Displays a 5x5 game board with clear differentiation between empty cells and character positions.
  - **WebSocket Communication**: Facilitates real-time communication with the server for move validation and game state updates.
  - **Client-Side Move Validation**: Validates moves on the client side before sending them to the server, reducing server load and improving responsiveness.
  - **Display of Valid Moves**: Highlights valid moves for selected characters, making it easier for players to plan their strategy.
  - **Event Handling**: Manages game initialization, player moves, and game state updates efficiently.

  ### Edge Cases Handled

  - **Simultaneous Move Attempts**: Properly handles scenarios where multiple clients attempt to make moves simultaneously.
  - **Disconnection and Reconnection**: Manages client disconnections and reconnections gracefully, ensuring the game state remains consistent.
  - **Out-of-Turn Moves**: Prevents players from making moves out of turn, maintaining the integrity of the game.
  - **Mid-Game Quits**: Handles situations where a player quits mid-game, updating the game state accordingly.
  - **Game Termination**: Ensures proper termination of the game when all opponent's pieces are eliminated.

  ### Additional Features

  - **Move Validation**: Prevents selection or movement of opponent's pieces and ensures moves are within the 5x5 grid boundaries.
  - **Character-Specific Movement Rules**: Validates moves according to each character type's movement rules, preventing invalid moves.
  - **Friendly Fire Prevention**: Ensures players cannot target their own characters.
  - **Invalid Move Communication**: Communicates invalid move attempts to the user, prompting them to retry.
  - **Simultaneous Move Handling**: Manages simultaneous move attempts by multiple clients effectively.
  - **Disconnection Handling**: Manages client disconnections and reconnections during an ongoing game.
  - **Turn-Based Play**: Ensures players take turns making moves, maintaining the flow of the game.
  - **Game State Management**: Updates and displays the game state after each turn, providing a clear view of the board.
  - **Winning Conditions**: Announces the winner when one player eliminates all of their opponent's characters.

  ### Bonus Features

  - **Ranking System**: Tracks player performance across multiple games through a scoreboard, providing a competitive environment.
  - **Replay System**: Allows players to review past games move by move, helping them analyze and improve their strategies.

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

     ```
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

  ### Client

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

  ### User Interface 

  - Display the 5x5 game board with clear differentiation between empty cells and character positions.
  - Use distinct visual representations for each player's characters (e.g., different colors or prefixes as in the original requirements).
  - When a player selects their character, highlight valid move options as clickable buttons below the game board.
  - Show the current player's turn prominently.
  - Display a move history or log.
  - Implement a game over screen showing the winner and offering an option to start a new game.

  ## Bonus Challenges

  1. **Replay System**: I have implemented a replay system that allows players to review past games move by move. The replay system provides a detailed history of each move, including the move itself, the player who made the move, and the timestamp of the move. Players can easily navigate through the replay and analyze the game to improve their strategies. The replay system is accessible through the "Move History" page in the application.

  2. **Ranking System**: I have added a ranking system that tracks player performance across multiple games. The ranking system assigns a score to each player based on their performance in each game. The score is calculated by considering factors such as the number of wins, the number of pins held by a player, and the overall gameplay performance. The ranking system provides a fair and competitive environment for players to strive for the top position on the leaderboard.

  ## Setup and Installation

  ### Prerequisites

  - Node.js (v14 or higher)
  - npm (v6 or higher)
  - A modern web browser (Chrome, Firefox, Safari, etc.)

  ## Contributing

  We welcome contributions to improve the game. To contribute, follow these steps:

  1. **Fork the repository.**
  2. **Create a new branch:**

     ```bash
     git checkout -b feature/your-feature-name
     ```

  3. **Make your changes and commit them:**

     ```bash
     git commit -m 'Add some feature'
     ```

  4. **Push to the branch:**

     ```bash
     git push origin feature/your-feature-name
     ```

  5. **Create a pull request.**

  ## License

  This project is licensed under the MIT License. See the LICENSE file for details.

  ## Acknowledgements

  - **Font Awesome**: For providing the icons used in the game.
  - **Google Fonts**: For the Gotham font used in the game.

## Feedback

If you have any feedback, suggestions, or questions regarding this repository, please feel free to open an issue or contact me below on any of the platforms you prefer 😊
<br/>
<p align="center">
  <a href="https://pulkitmathur.tech/"><img src="https://github.com/Pulkit1822/Pulkit1822/blob/main/animated-icons/pic.jpeg" alt="portfolio" width="32"></a>&nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/pulkitkmathur/"><img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Linkedin.svg" alt="Linkedin Logo" width="32"></a>&nbsp;&nbsp;&nbsp;
  <a href="mailto:pulkitmathur.me@gmail.com"><img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Gmail.svg" alt="Gmail logo" height="32"></a>&nbsp;&nbsp;&nbsp;
  <a href="https://www.instagram.com/pulkitkumarmathur/"><img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Instagram.svg" alt="Instagram Logo" width="32"></a>&nbsp;&nbsp;&nbsp;
  <a href="https://in.pinterest.com/pulkitkumarmathur/"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="Pinterest Logo" width="32"></a>&nbsp;&nbsp;&nbsp;
  <a href="https://twitter.com/pulkitkmathur"><img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="Twitter Logo" width="32"></a>&nbsp;&nbsp;&nbsp;
</p>



Happy learning and coding!

---

If you find this repository useful, don't forget to star it! ⭐️

### Written by [Pulkit](https://github.com/Pulkit1822)