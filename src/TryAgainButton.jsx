function TryAgainButton({ tryAgain }) {
  return (
    <>
      <div className="letters-container">
        <button className="letter" onClick={tryAgain}>
          Try Again
        </button>
      </div>
      ;
    </>
  );
}

export default TryAgainButton;
