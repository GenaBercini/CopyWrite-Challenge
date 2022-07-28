import { REVERSED_TEXT } from '../actions/actions';

let initialState = {
    text: [],
}

export default function textReducer(state = initialState, action) {
    switch(action.type) {
        case REVERSED_TEXT:
            return {
                ...state,
                text: [...state.text, action.payload],
            };
            default:
                return state;
            }
    }