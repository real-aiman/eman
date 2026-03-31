export default function Square({ piece, isWhite }) {
  const bgColor = isWhite ? "white-bg" : "black-bg";
  return (
    <div className={`square-box ${bgColor}`}>
      {piece}
    </div>
  );
}