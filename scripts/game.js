// global vairables

const gridContainer = document.getElementById("sudoku-grid");
const mistakeCounter = document.getElementById("counter");

// functions

// function to create 9x9 grid
function createGrid() {
	// Add rows and columns to empty html table
	for (let i = 0; i < 9; i++) {
		let row = document.createElement("tr");
		row.classList.add("row");
		// Add class row to cells
		for (let j = 0; j < 9; j++) {
			let cell = document.createElement("td");
			cell.classList.add("cell");
			row.appendChild(cell);
		}
		gridContainer.appendChild(row);
	}
}
createGrid();

// Function to populate the Sudoku grid in the HTML table
function populateGrid() {
	// Fill with random numbers 1-9
	cell.innerText = Math.floor(Math.random() * 9) + 1;
	// Check for repeated numbers in row
	// Check for repeated numbers in column
	// Check for repeated numbers in 3x3 grid
	// Solve from top-left
}

// Ensure board is valid and solvable

// Check user inputs are correct
function checkInput() {
	// Check validity of user input
	// If incorrect remove input from grid
	// Count number of mistakes
}

// function to start new game on click
function newGame() {
	// check difficulty level
	// fill in grid
	createGrid();
	// start time when new grid is loaded
	// reset previous grid
}

// end time when puzzle is solved

// change difficulty level
// A given is a filled in tile
function changeDiffultyLevel() {
	// easy - 50 givens
	// medium - 40 givens
	// hard - 30 givens
	// insane - 20 givens
}

// Load how to play screen
function displayGameRules() {}
