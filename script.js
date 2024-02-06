let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates a random integer in range for the target number
let generateTarget = () => {
  return Math.floor(Math.random() * 9 + 1);
};

// Function is called each round to determine which guess is closest to the target number.
let compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  secretNumber = generateTarget();
  // Checks that guess is within range
  if (humanGuess >= 0 && humanGuess <= 9) {
    humanSecretGuess = Math.abs(humanGuess - secretNumber);
    computerSecretGuess = Math.abs(computerGuess - secretNumber);
  } else {
    alert("Guess is out of range. Try again"); // pop-up box
  }

  // Compairs absolute value of calculated distance from target number
  if (Math.abs(humanSecretGuess) <= Math.abs(computerSecretGuess)) {
    return true;
  } else {
    return false;
  }
};

// Determins winner and add corresponding point to overall score
let updateScore = (winner) => {
  if (winner === "human") {
    return (humanScore += 1);
  } else if (winner === "computer") {
    return (computerScore += 1);
  }
};

let advanceRound = () => {
  currentRoundNumber += 1;
};