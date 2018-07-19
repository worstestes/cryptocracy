import { ADD_COIN, DELETE_COIN } from '../actions/actionTypes';

const initialState = {
    coin: []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COIN:
        return {
            ...state,
            coin: state.coin.concat({
               coin: action.coin
            })
        };
        case DELETE_COIN:
        return {
            ...state,
            coins: state.coins.filter(coin => {
                return coin.id !== action.id
            })
        }

        default:
        return state;
    }
}

export default reducer;