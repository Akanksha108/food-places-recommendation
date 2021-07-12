import React, { useState } from "react";
import "./styles.css";

const restaurantList = {
  Indian: ["Spice Kitchen", "Seasonal Tastes", "Sukanta", "Barbeque Nation"],
  Chinese: ["Five Fat Monks", "Mainland China", "Chinese Room", "Soy Affair"],
  Italian: ["Little Italy", "Dario’s", "Arthur’s Theme", "Le Plaisir"],
  Continental: ["Beetroot Bistro", "Chirp", "Barometer", "Kargo"]
};

// let restaurantsWeKnow = Object.keys(restaurantList);
// console.log(restaurantsWeKnow);

console.log(restaurantList.Indian);

export default function App() {
  const [restaurants, setRestaurants] = useState("");

  function indianClickHandler(event) {
    console.log(restaurantList.Indian);
  }

  function chineseClickHandler() {
    console.log(restaurantList.Chinese);
  }

  let italianClickHandler = () => {
    console.log(restaurantList.Italian);
  };

  let continentalClickHandler = () => {
    console.log(restaurantList.Continental);
  };

  return (
    <div className="App">
      <h1
        style={{
          backgroundImage: "linear-gradient(#7b4397, #dc2430)",
          padding: "1rem"
        }}
      >
        Good Food is Good Mood!!!
      </h1>
      <h2>Food Places Recommendation</h2>
      <p>
        Checkout the best places in the city to have your favourite food
        <span>😋</span>
      </p>
      <div style={{ padding: "1rem" }}>
        <button onClick={indianClickHandler} value="Indian">
          Indian
        </button>
        <button onClick={chineseClickHandler}>Chinese</button>
        <button onClick={italianClickHandler}>Italian</button>
        <button onClick={continentalClickHandler}>Continental</button>
      </div>
    </div>
  );
}
