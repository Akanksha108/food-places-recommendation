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

export default function App() {
  const [restaurants, setRestaurants] = useState("");

  function indianClickHandler(event) {
    var restaurants = restaurantList.Indian;
    //console.log(restaurants);
    setRestaurants(restaurants);
  }

  function chineseClickHandler() {
    var restaurants = restaurantList.Chinese;
    setRestaurants(restaurants);
  }

  let italianClickHandler = () => {
    var restaurants = restaurantList.Italian;
    setRestaurants(restaurants);
  };

  let continentalClickHandler = () => {
    var restaurants = restaurantList.Continental;
    setRestaurants(restaurants);
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
      <ul>
        <li style={{ fontWeight: "bold", padding: "10px" }}>
          {" "}
          {restaurants[0]}{" "}
        </li>
        <li style={{ fontWeight: "bold", padding: "10px" }}>
          {" "}
          {restaurants[1]}{" "}
        </li>
        <li style={{ fontWeight: "bold", padding: "10px" }}>
          {" "}
          {restaurants[2]}{" "}
        </li>
        <li style={{ fontWeight: "bold", padding: "10px" }}>
          {" "}
          {restaurants[3]}{" "}
        </li>
      </ul>
    </div>
  );
}
