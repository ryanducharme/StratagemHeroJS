// let lastFrameTime = performance.now();
// let gameOver = false;

// let timer = 10
// // Event listener for keydown events
// //window.addEventListener('keydown', handleKeyDown);

// function gameLoop() {
//   if (gameOver) {
//     return; // Exit the game loop if the game is over
//   }

//   const currentTime = performance.now();
//   const deltaTime = (currentTime - lastFrameTime) / 1000; // Convert milliseconds to seconds

//   // Update game state
//   updateGameState(deltaTime);

//   // Render game
//   renderGame();

//   lastFrameTime = currentTime;

//   // Request next frame
//   requestAnimationFrame(gameLoop);
// }

// function updateGameState(deltaTime) {
//   // Update game logic based on deltaTime
//   // For example, move game objects, check collisions, etc.
//   console.log(timer -= deltaTime);
// }

// function renderGame() {
//   // Render game graphics
// }

// function handleKeyDown(event) {
//   // Handle keydown events
//   console.log('Key pressed:', event.key);
// }

// // Start the game loop
// gameLoop();