import { connect } from 'react-redux';
import ChessPiece from './ChessPiece'

const mapStateToProps = ({ chessState }) => {
    return { chessState }
};
  
const mapDispatchToProps = (dispatch) => {
    return { }
};

const Board = (props) => {
    const { chessState } = props
    console.log(chessState)
    const board = chessState.board.map((cell, index) => {
        const backgroundIndex = (idx) => {
            let i = idx
            switch(true) {
                case (i > 7 && i < 16): return (i+1)%2;
                case (i > 23 && i < 32): return (i+1)%2;
                case (i > 39 && i < 48): return (i+1)%2;
                case (i > 55 && i < 64): return (i+1)%2;
                default: return i%2;
            }
        }
        const blackWhite = backgroundIndex(index)===0;
        return (
            <div key={index} className={blackWhite ? 'piece-container-white' : 'piece-container-black'}>
               <ChessPiece piece={cell.piece} player={cell.player} position={cell.position} />
            </div>
        )
        
    })


    return (
        <div>
            <div className="chess-board">
                {board}
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);