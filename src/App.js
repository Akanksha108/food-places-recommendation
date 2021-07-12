import "./styles.css";

export default function App() {
  let indianClickHandler = () => {
    console.log("Indian Food");
  };

  let chineseClickHandler = () => {
    console.log("Indian Food");
  };

  let italianClickHandler = () => {
    console.log("Indian Food");
  };

  let continentalClickHandler = () => {
    console.log("Indian Food");
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
        <button onClick={indianClickHandler}>Indian</button>
        <button onClick={chineseClickHandler}>Chinese</button>
        <button onClick={italianClickHandler}>Italian</button>
        <button onClick={continentalClickHandler}>Continental</button>
      </div>
    </div>
  );
}
