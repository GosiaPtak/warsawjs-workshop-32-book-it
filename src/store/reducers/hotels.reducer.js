import {GET_DATA_SUCCESS } from '../actions'

const initialState = {data: []};

export function hotels (state = initialState, action){

//wylapac z listy interesujace
switch (action.type){
    case GET_DATA_SUCCESS:
    return {...state, data: action.payload};
    default: return state;
}
}