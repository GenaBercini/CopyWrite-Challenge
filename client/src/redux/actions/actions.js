import axios from 'axios';
export const REVERSED_TEXT = "REVERSED_TEXT";

export default function getReversedText(query) {
    return function (dispatch) {
        try {
                axios.get(`/iecho?text=${query}`)
                    .then(reversedWord => {
                        return dispatch({ type: REVERSED_TEXT, payload: reversedWord.data })
                    })
                    .catch(error => console.log(error));
        } catch (error) {
            console.log(error)
        }
    }
};