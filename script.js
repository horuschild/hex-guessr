// Get the color display element
const colorDisplay = document.getElementById("color-display");

// Get all color options
const colorOptions = document.getElementsByClassName("color-option");

// Get the reset button
const resetButton = document.getElementById("reset-button");

const result = document.getElementById("result");

// Generate a random hex color
function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Set up the game
function setupGame() {
  // Generate a random color
  const targetColor = generateRandomColor();

  // Display the target color
  colorDisplay.innerHTML = targetColor;

  // Assign random colors to the options
  const optionIndices = [0, 1, 2]; // Indices for colorOptions array
  const targetIndex = Math.floor(Math.random() * 3); // Index for correct option

  for (let i = 0; i < colorOptions.length; i++) {
    const randomColor = generateRandomColor();
    colorOptions[i].style.backgroundColor = randomColor;

    if (i === targetIndex) {
      // Assign the target color to the correct option
      colorOptions[i].style.backgroundColor = targetColor;

      // Attach event listener to the correct option
      colorOptions[i].addEventListener("click", function () {
        result.style.opacity = "1";
        result.innerHTML = "You're Right!";
        colorDisplay.style.color = targetColor;
        resetButton.style.display = "block";
        hideOtherOptions(i);
      });
    } else {
      // Attach event listener to the incorrect options
      colorOptions[i].addEventListener("click", function () {
        result.style.opacity = "1";
        result.innerHTML = "Try Again!";
        hideSelectedOption(i);
      });
    }
  }
}

// Hide other color options
function hideOtherOptions(selectedIndex) {
  for (let i = 0; i < colorOptions.length; i++) {
    if (i !== selectedIndex) {
      colorOptions[i].style.opacity = "0";
      colorOptions[i].disabled = true;
    }
  }
}

// Hide selected color option
function hideSelectedOption(selectedIndex) {
  if (!colorOptions[selectedIndex].classList.contains("correct-option")) {
    colorOptions[selectedIndex].style.opacity = "0";
    colorOptions[i].disabled = true;
  }
}

// Reset the game
function resetGame() {
  resetButton.style.display = "block"; // Hide the reset button
}

// Start the game
setupGame();

// Attach event listener to the reset button
// resetButton.addEventListener("click", resetGame);

