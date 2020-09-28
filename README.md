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

The `delay` parameter receives the amount of time (in miliseconds) to delay between automatically cycling an item. If a non-integer value is sent the it won't change to the next slide, you have to do it manually by clicking "Next" or "Previous".

The `children` parameter receives the slides to show, each slide contains the following fields.

<ul>
  <li>title</li>
  <li>description</li>
  <li>lego images</li>
</ul>

`Example:` <br />

```yaml
[
  {
    title: "First Demo",
    description: "Awesome Slider... Fisrt position",
    imgURL: "https://www.example1.com/img1.jpg",
  },
  {
    title: "Second Demo",
    description: "Awesome Slider... Second position",
    imgURL: "https://www.example1.com/img2.jpg",
  },
  {
    title: "Third Demo",
    description: "Awesome Slider... Third position",
    imgURL:"https://www.example1.com/img3.jpg",
  },
]
```

<br />
All of these fields will be shows for every slide.
