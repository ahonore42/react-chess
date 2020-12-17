
const initialState = {
    board: new Array(64),
    positions: []
}

const ChessReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return { ...state }
    }
}

export default ChessReducer