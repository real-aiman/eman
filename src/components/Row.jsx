import Square from './Square';

export default function Row({ pieces, startWithWhite }) {
  return (
    <>
      {pieces.map((piece, index) => (
        <Square 
          key={index} 
          piece={piece} 
          isWhite={startWithWhite ? index % 2 === 0 : index % 2 !== 0} 
        />
      ))}
    </>
  );
}