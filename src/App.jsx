import "./App.css";
import { useState } from "react";
import { letters } from "./constants/letters";
import { stages } from "./constants/stages";
import { words } from "./constants/words";

function App() {
  const randomIndex = words[Math.floor(Math.random() * words.length)];

  const [randomWord, setRandomWord] = useState(randomIndex);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [currentStage, setCurrentStage] = useState(0);

  const word = randomWord;

  const displayedWord = word
    .split("")
    .map((letter) => (selectedLetters.includes(letter) ? letter : ""))
    .join("");

  const isWon = displayedWord === randomWord;
  const isGameOver = selectedLetters.length > stages.length || isWon;

  function letterClick(letter) {
    if (selectedLetters.includes(letter)) {
      return;
    }
    setSelectedLetters((prevSelected) => [...prevSelected, letter]);
    console.log(selectedLetters);

    if (!randomWord.includes(letter)) {
      setCurrentStage((c) => c + 1);
    }
  }

  function tryAgain() {
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
    setSelectedLetters([]);
    setCurrentStage(0);
  }

  return (
    <>
      <div className="container">
        <h2> {isGameOver ? (isWon ? "You won!" : "You lost!") : ""}</h2>
        <div className="container-img">
          <img className="imgPic" src={stages[currentStage]}></img>
        </div>

        {isGameOver ? (
          isWon ? (
            <div className="word-container">
              {word.split("").map((letter, idx) => (
                <span
                  key={idx}
                  className="word-letter-underline"
                  style={{ color: "green" }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ) : (
            <div className="word-container">
              {word.split("").map((letter, idx) => (
                <span
                  key={idx}
                  className="word-letter-underline"
                  style={{
                    color: selectedLetters.includes(letter) ? "black" : "red",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          )
        ) : (
          <div className="word-container">
            {word.split("").map((letter, idx) => (
              <span key={idx} className="word-letter-underline underline">
                {selectedLetters.includes(letter) ? letter : ""}
              </span>
            ))}
          </div>
        )}

        {isGameOver ? (
          <div className="letters-container">
            <button className="letter" onClick={tryAgain}>
              Try Again
            </button>
          </div>
        ) : (
          <div className="letters-container">
            {letters.map((letter, idx) => (
              <button
                key={idx}
                className="letter"
                onClick={() => letterClick(letter)}
                disabled={selectedLetters.includes(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
