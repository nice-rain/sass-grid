# SASS Grid Template
This project is a React example using my sass grid template. The template is located at `src/grid.scss` and may be used within another project by importing it.

## Background

I was recently creating a card grid for a project that I was working on. I could easily get the items to display using flex, but wrapping would leave white-space on the right side once an item wrapped. I wanted all items to be centered within a container and automatically wrap when the container was too small for a given screen. Originally, I manually created a .css file to handle the grid for the project, but I didn't want to go through the headache of setting up and changing all variables again. 

### Enter sass-grid
This is an scss file designed to help you setup and generate @media queries based upon fixed card sizes placed within a grid. Because I do not use `grid` layout in css, cross-browser compatibility is much greater (as long as your browser supports @media queries).

## Features
* Generates @media query breakpoints for mobile and desktop screen sizes using a grid layout.
* Allows you to specify specific card widths and will change the breakpoints on compile.
* Modular .scss file enables you to drop it easily into any project. (you may need to rename the classes if you already have .item and .container in your css files)
* Allows you to specify a maximum container width OR a maximum number of items that you want to allow in a given row.

## Demo

Once you clone the project, run `npm install` to install all dependencies. Once dependencies are installed, run `npm start` to and open the project in your browser. You can test responsive behavior as well as grid settings that you may have chosen in the scss file.
