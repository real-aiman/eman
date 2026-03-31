import Row from './Row';

export default function Board() {
  const row1 = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
  const row2 = ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'];
  const emptyRow = ['', '', '', '', '', '', '', ''];
  const row7 = ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'];
  const row8 = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];

  return (
    <div className="chessboard-frame">
      <Row pieces={row1} startWithWhite={true} />
      <Row pieces={row2} startWithWhite={false} />
      <Row pieces={emptyRow} startWithWhite={true} />
      <Row pieces={emptyRow} startWithWhite={false} />
      <Row pieces={emptyRow} startWithWhite={true} />
      <Row pieces={emptyRow} startWithWhite={false} />
      <Row pieces={row7} startWithWhite={true} />
      <Row pieces={row8} startWithWhite={false} />
    </div>
  );
}