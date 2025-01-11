# Falling Sand Simulation

A live interactive sand simulation built using p5.js. Users can drag the mouse to create sand particles that fall and interact with their environment. The simulation includes customizable grid size and color options.You can use it by goint this link:
[FallingSandSim](https://lucifer-prashant.github.io/FallingSand/)

## Features

- **Dynamic Sand Simulation**: Drag the mouse to create sand particles that fall and accumulate based on simple physics.
- **Customizable Hue**: Adjust the color of the sand particles using the hue slider.
- **Adjustable Grid Size**: Modify the grid size to change the resolution of the simulation.
- **Reset Functionality**: Clear the simulation with the Reset button to start over.
- **Smooth Performance**: Optimized for smooth rendering even with large numbers of particles.
- **Mobile Support**: Touch-enabled for mobile devices (The UI is not optimized for it)

## Controls

- **Mouse/Touch**: Drag to create sand particles
- **Hue Slider**: Adjust the color of the sand particles
- **Grid Size Slider**: Change the grid size for different resolutions
- **Reset Button**: Clears the simulation grid
  

## Technologies Used

- **p5.js**: A JavaScript library that makes it easy to create graphics and interactive content
- **HTML/CSS**: For structuring and styling the webpage
- **JavaScript**: Core programming language for the simulation logic

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/FallingSand.git
```

2. Navigate to the project directory:
```bash
cd FallingSand
```

3. Open `index.html` in your web browser


## How It Works

The simulation uses a grid-based approach where:
1. Each cell can be empty or contain a sand particle
2. Particles fall due to simulated gravity
3. When a particle can't fall straight down, it tries to fall diagonally
4. Collision detection prevents particles from overlapping

