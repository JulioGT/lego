import React from "react";
import "./App.css";
import CarouselComp from "./components/carousel";

function App() {
  //Simulates the sliders to display
  const slides = [
    {
      title: "First Demo",
      description: "Awesome Slider... Fisrt position",
      imgURL:
        "https://www.lego.com/cdn/cs/set/assets/blta3c996183861b559/10275-202009-Hero-Standard-Large-6.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1",
    },
    {
      title: "Second Demo",
      description: "Awesome Slider... Second position",
      imgURL:
        "https://www.lego.com/cdn/cs/set/assets/blt1a1b57bc0b9932fc/Dots-Home-202006-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1",
    },
    {
      title: "Third Demo",
      description: "Awesome Slider... Third position",
      imgURL:
        "https://www.lego.com/cdn/cs/set/assets/blt93c2cf10b16c2cec/70436-HP-202007-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <CarouselComp delay={1200} children={slides} />
      </header>
    </div>
  );
}

export default App;
