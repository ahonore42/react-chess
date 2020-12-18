import {HANDLE_DRAWER} from '../types'

export const handleDrawer = (boolean) => (dispatch) => dispatch({ payload: boolean, type: HANDLE_DRAWER});