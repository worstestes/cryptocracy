import { ADD_COIN, DELETE_COIN } from './actionTypes';

export const addCoin = (coin) => {
    return {
        type: ADD_COIN,
        coin: coin
    };
};

export const deleteCoin = (id) => {
    return {
        type: DELETE_COIN,
        coinId: id
    };
};