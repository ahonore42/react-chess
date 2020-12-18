import { HANDLE_DRAWER } from "../types";

const initialState = {
    drawerOpen: false
};

const UIReducer = (state = initialState, action) => {
    switch(action.type) {
        case HANDLE_DRAWER:
            return { ...state, drawerOpen: action.payload}
        default:
            return { ...state }
    };
};

export default UIReducer;