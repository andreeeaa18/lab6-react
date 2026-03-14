import { letters } from "./constants/letters";
function Letters({ selectedLetters, letterClick }) {
  return (
    <>
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
    </>
  );
}

export default Letters;
