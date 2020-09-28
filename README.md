This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

### `1. git clone https://github.com/JulioGT/lego.git`

### `2. In a terminal type "yarn" and hit "enter"`

### `3. yarn start`

The application runs in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Description

This app imports `react-bootstrap/Carousel` library and a new Component `(Carousel)` was created with that library.

The `Carousel` Component receives two props:

1. delay
2. children

The `delay` parameter receives the delay (in miliseconds) for every slide.

The `children` parameter receives the slides to show, each slide contains the following fields

<ul>
  <li>title</li>
  <li>description</li>
  <li>lego images</li>
</ul>

All of these fields will be shows for every slide.
