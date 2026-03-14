function IsWon({ word, selectedLetters, isWon }) {
  return (
    <div className="word-container">
      {word.split("").map((letter, idx) => (
        <span
          key={idx}
          className="word-letter-underline"
          style={{
            color: isWon
              ? "green"
              : selectedLetters.includes(letter)
              ? "black"
              : "red",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
export default IsWon;
