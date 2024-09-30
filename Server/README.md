# 5x5 Advanced Chess Server Side

## Overview

This project is a turn-based, chess-like game implemented with a server-client architecture. The game features real-time communication using WebSockets and a web-based user interface. The primary focus is on implementing correct game logic, efficient network communication, and proper move validation on both client and server sides.

## Features

### Core Game Logic

- Accurate implementation of 5x5 advanced chess game rules.
- Real-time synchronization of game state between the server and all connected clients.

### WebSocket Server

- **Event Handling:** Manages game initialization, player moves, and game state updates.
- **Real-time Synchronization:** Ensures the game state is synchronized between the server and all connected clients.

### Web Interface

- Display of a 5x5 game board.
- WebSocket communication with the server.
- Client-side move validation.
- Display of valid moves for selected characters.
- Sending move commands to the server and handling responses.
- Event handling for game initialization, player moves, and game state updates.

### Edge Cases Handled

- Simultaneous move attempts by multiple clients.
- Disconnection and reconnection of clients during an ongoing game.
- Attempts to make moves out of turn.
- Handling of game state when a player quits mid-game.
- Proper game termination when all opponent's pieces are eliminated.

### Additional Features

- Move validation to prevent selection or movement of opponent's pieces.
- Validation of moves within the 5x5 grid boundaries.
- Validation of moves according to each character type's movement rules.
- Prevention of friendly fire.
- Handling and communication of invalid move attempts to the user.
- Handling of simultaneous move attempts by multiple clients.
- Disconnection and reconnection of clients during an ongoing game.
- Handling of attempts to make moves out of turn.
- Handling of game state when a player quits mid-game.
- Proper game termination when all opponent's pieces are eliminated.

### Bonus Features

- **Ranking System:** Tracks player performance across multiple games through a scoreboard.
- **Replay System:** Allows players to review past games move by move.

## Technologies Used

- **Server:** Node.js, WebSocket
- **Client:** HTML, CSS, JavaScript

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A modern web browser (Chrome, Firefox, Safari, etc.)

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

   ```url
   http://localhost:8080
   ```

## Contributing

We welcome contributions to enhance the game. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

