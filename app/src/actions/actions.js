import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAILURE = 'FETCHING_QUOTE_FAILURE';

export const getQuote = () => dispatch => {
    dispatch({ type: FETCHING_QUOTE_START });

    axios
        .get(`https://michael-scott-quotes-api.herokuapp.com/randomQuote`)
        .then(res => {console.log(res);
            dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.text });
        })
        .catch(err => {console.log(err);
            dispatch({
                type: FETCHING_QUOTE_FAILURE,
                payload: `${err.statusText} with response code ${err.status}`
              });
        })
}