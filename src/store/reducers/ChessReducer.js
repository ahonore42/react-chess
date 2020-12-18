
const initialState = {
    board: [
        {position: 'a8', player: 2, piece: 'rook'}, {position: 'b8', player: 2, piece: 'knight'}, {position: 'c8', player: 2, piece: 'bishop'}, {position: 'd8', player: 2, piece: 'queen'}, {position: 'e8', player: 2, piece: 'king'}, {position: 'f8', player: 2, piece: 'bishop'}, {position: 'g8', player: 2, piece: 'knight'}, {position: 'h8', player: 2, piece: 'rook'},
        {position: 'a7', player: 2, piece: 'pawn'}, {position: 'b7', player: 2, piece: 'pawn'}, {position: 'c7', player: 2, piece: 'pawn'}, {position: 'd7', player: 2, piece: 'pawn'}, {position: 'e7', player: 2, piece: 'pawn'}, {position: 'f7', player: 2, piece: 'pawn'}, {position: 'g7', player: 2, piece: 'pawn'}, {position: 'h7', player: 2, piece: 'pawn'},
        {position: 'a6', player: null, piece: null}, {position: 'b6', player: null, piece: null}, {position: 'c6', player: null, piece: null}, {position: 'd6', player: null, piece: null}, {position: 'e6', player: null, piece: null}, {position: 'f6', player: null, piece: null}, {position: 'g6', player: null, piece: null}, {position: 'h6', player: null, piece: null},
        {position: 'a5', player: null, piece: null}, {position: 'b5', player: null, piece: null}, {position: 'c5', player: null, piece: null}, {position: 'd5', player: null, piece: null}, {position: 'e5', player: null, piece: null}, {position: 'f5', player: null, piece: null}, {position: 'g5', player: null, piece: null}, {position: 'h5', player: null, piece: null},
        {position: 'a4', player: null, piece: null}, {position: 'b4', player: null, piece: null}, {position: 'c4', player: null, piece: null}, {position: 'd4', player: null, piece: null}, {position: 'e4', player: null, piece: null}, {position: 'f4', player: null, piece: null}, {position: 'g4', player: null, piece: null}, {position: 'h4', player: null, piece: null},
        {position: 'a3', player: null, piece: null}, {position: 'b3', player: null, piece: null}, {position: 'c3', player: null, piece: null}, {position: 'd3', player: null, piece: null}, {position: 'e3', player: null, piece: null}, {position: 'f3', player: null, piece: null}, {position: 'g3', player: null, piece: null}, {position: 'h3', player: null, piece: null},
        {position: 'a2', player: 1, piece: 'pawn'}, {position: 'b2', player: 1, piece: 'pawn'}, {position: 'c2', player: 1, piece: 'pawn'}, {position: 'd2', player: 1, piece: 'pawn'}, {position: 'e2', player: 1, piece: 'pawn'}, {position: 'f2', player: 1, piece: 'pawn'}, {position: 'g2', player: 1, piece: 'pawn'}, {position: 'h2', player: 1, piece: 'pawn'},
        {position: 'a1', player: 1, piece: 'rook'}, {position: 'b1', player: 1, piece: 'knight'}, {position: 'c1', player: 1, piece: 'bishop'}, {position: 'd1', player: 1, piece: 'queen'}, {position: 'e1', player: 1, piece: 'king'}, {position: 'f1', player: 1, piece: 'bishop'}, {position: 'g1', player: 1, piece: 'knight'}, {position: 'h1', player: 1, piece: 'rook'},
    ],
    moves: [],
    pieces: {
        pawn: {images: [], selected: false, moved: false},
        rook: {images: [], selected: false, moved: false},
        knight: {images: [], selected: false, moved: false},
        bishop: {images: [], selected: false, moved: false},
        queen: {images: [], selected: false, moved: false},
        king: {images: [], selected: false, moved: false},
        alfil: {images: [], selected: false, moved: false}
    }
};

const ChessReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return { ...state }
    };
};

export default ChessReducer;