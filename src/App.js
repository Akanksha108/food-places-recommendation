import React, { useState } from "react";
import logo from "./pexels-trang-doan-1092730.jpg";
import "./styles.css";

const restaurantList = {
  Indian: [
    "Spice Kitchen  9/10",
    "Seasonal  8.5/10",
    "Sukanta  7.5/10",
    "Barbeque Nation  7/10"
  ],
  Chinese: [
    "Five Fat Monks  8.5/10",
    "Mainland China 8/10",
    "Chinese Room  6/10",
    "Soy Affair 7/10"
  ],
  Italian: [
    "Little Italy  8.5/10",
    "Dario’s  7.5/10",
    "Arthur’s Theme  6.5/10",
    "Le Plaisir  7/10"
  ],
  Continental: [
    "Beetroot Bistro  9/10",
    "Chirp   8/10",
    "Barometer  8.5/10",
    "Kargo  7/10"
  ]
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
          paddingTop: "3rem",
          height: "120px",
          color: "antiquewhite",
          marginTop: 0
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

      <img src={logo} alt="food" style={{ width: "600px", height: "400px" }} />
    </div>
  );
}
