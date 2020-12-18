import {pawnBlack, pawnWhite, bishopWhite, bishopBlack, kingWhite, kingBlack, knightWhite, knightBlack, queenWhite, queenBlack, rookWhite, rookBlack} from '../assets/images/index'

const ChessPiece = ({piece, player, position}) => {
    const chessImage = (pce, plyr) => {
        switch(true) {
            case pce==='pawn': return plyr===1&&plyr!==null ? pawnWhite : pawnBlack;
            case pce==='bishop': return plyr===1&&plyr!==null ? bishopWhite : bishopBlack;
            case pce==='king': return plyr===1&&plyr!==null ? kingWhite : kingBlack;
            case pce==='knight': return plyr===1&&plyr!==null ? knightWhite : knightBlack;
            case pce==='queen': return plyr===1&&plyr!==null ? queenWhite : queenBlack;
            case pce==='rook': return plyr===1&&plyr!==null ? rookWhite : rookBlack;
            default: return null;
        }
    }
    return piece ? (
            <div className={'piece-container'}>
                <img className={'chess-piece'} src={chessImage(piece, player)} alt={piece} onClick={() => console.log(`You clicked the ${piece} at ${position}`)} />
            </div>
    )
    :
    <div className={'piece-container'}></div>
        
    
}

export default ChessPiece