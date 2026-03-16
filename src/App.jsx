import "./App.css";
import { useState } from "react";
import { stages } from "./constants/stages";
import { words } from "./constants/words";
import Letters from "./Letters";
import TryAgainButton from "./TryAgainButton";
import IsWon from "./IsWon";

function getRandomWord() {
  const randomObtainedWord = Math.floor(Math.random() * words.length);
  console.log("Random word:", words[randomObtainedWord]);
  return words[randomObtainedWord];
}

function App() {
  const [randomWord, setRandomWord] = useState(getRandomWord);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [currentStage, setCurrentStage] = useState(0);

  const word = randomWord;

  const displayedWord = word
    .split("")
    .map((letter) => (selectedLetters.includes(letter) ? letter : ""))
    .join("");

  const isWon = displayedWord === randomWord;

  const wrongGuesses = selectedLetters.filter(
    (letter) => !randomWord.includes(letter),
  ).length;
  const isGameOver = wrongGuesses >= stages.length - 1 || isWon;

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
    setRandomWord(getRandomWord);
    setSelectedLetters([]);
    setCurrentStage(0);
  }

  return (
    <>
      <div className="container">
        <h2> {isGameOver ? (isWon ? "You won!" : "You lost!") : ""}</h2>
        <div className="container-img">
          <img className="imgPic" src={stages[currentStage]}></img>
          {console.log(currentStage)}
        </div>

        {isGameOver ? (
          isWon ? (
            <IsWon word={word} selectedLetters={selectedLetters} isWon={true} />
          ) : (
            <IsWon
              word={word}
              selectedLetters={selectedLetters}
              isWon={false}
            />
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
          <TryAgainButton tryAgain={tryAgain} />
        ) : (
          <Letters
            selectedLetters={selectedLetters}
            letterClick={letterClick}
          />
        )}
      </div>
    </>
  );
}

export default App;
