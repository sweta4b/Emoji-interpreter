import "./styles.css";
import React, { useState } from "react";

const song = {
  Gazal: [
    { name: "Tum Itna Jo Muskura Rahe Ho", rating: "4.5/5" },
    { name: "Jhuki Jhuki si Nazar", rating: "4/5" }
  ],
  English: [
    { name: "Shape of you", rating: "4.5" },
    { name: "A Thousand Years", rating: "4/5" },
    { name: "Memories", rating: "4/5" }
  ],
  Retro: [
    { name: "Wake me up", rating: "4.5/5" },
    { name: "Yaddon ki baraat", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("English");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1>🎶 GoodMusic 🎶</h1>
      <p>🎶Checkout my favorite song here, select the category to start🎶</p>

      <div>
        {Object.keys(song).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {song[selectedCategory].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "30%",
                margin: "1rem 28rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <p>
        🎶Life is all about <strong>Good Music</strong>🎶
      </p>
    </div>
  );
}
