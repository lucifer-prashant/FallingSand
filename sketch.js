let grid
let w = 10
let cols, rows
let hueValue = 200

function make2DArray(cols, rows) {
	let arr = new Array(cols)
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows)
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = 0
		}
	}
	return arr
}

function setup() {
	createCanvas(1200, 650)
	colorMode(HSB, 360, 200, 200)
	initGrid()
	initControls()
}

function initGrid() {
	cols = floor(width / w)
	rows = floor(height / w)
	grid = make2DArray(cols, rows)
}

function initControls() {
	let hueSlider = document.getElementById("hue")
	hueSlider.addEventListener("input", () => {
		hueValue = parseInt(hueSlider.value)
	})
	let gridSizeSlider = document.getElementById("gridSize")
	gridSizeSlider.addEventListener("input", () => {
		w = parseInt(gridSizeSlider.value)
		setup() // Recalculate grid size
	})
	let resetButton = document.getElementById("reset")
	resetButton.addEventListener("click", () => {
		resetSimulation()
	})
}

function resetSimulation() {
	initGrid() // Reset grid
	hueValue = 200 // Reset hue value
	loop() // Continue drawing if it was stopped
}

function draw() {
	background(0)
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			noStroke()
			if (grid[i][j] > 0) {
				fill(grid[i][j], 255, 255)
				let x = i * w
				let y = j * w
				square(x, y, w)
			}
		}
	}
	updateGrid()
}

function updateGrid() {
	let nextGrid = make2DArray(cols, rows)
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let state = grid[i][j]
			if (state > 0) {
				let below = j + 1 < rows ? grid[i][j + 1] : 1 // Ensure in bounds
				let dir = random() > 0.5 ? -1 : 1
				let belowA, belowB
				if (i + dir >= 0 && i + dir <= cols - 1) {
					belowA = grid[i + dir][j + 1]
				}
				if (i - dir >= 0 && i - dir <= cols - 1) {
					belowB = grid[i - dir][j + 1]
				}
				if (below === 0) {
					nextGrid[i][j + 1] = grid[i][j]
				} else if (belowA === 0) {
					nextGrid[i + dir][j + 1] = grid[i][j]
				} else if (belowB === 0) {
					nextGrid[i - dir][j + 1] = grid[i][j]
				} else {
					nextGrid[i][j] = grid[i][j]
				}
			}
		}
	}
	grid = nextGrid
}

function mouseDragged() {
	let col = floor(mouseX / w)
	let row = floor(mouseY / w)
	let radius = 3
	let extent = floor(radius / 2)
	for (let i = -extent; i <= extent; i++) {
		for (let j = -extent; j <= extent; j++) {
			if (random() > 0.5) {
				let x = col + i
				let y = row + j
				if (x >= 0 && x < cols && y >= 0 && y < rows) {
					grid[x][y] = hueValue
				}
			}
		}
	}
	hueValue = (hueValue + 1) % 360
}
