import { api } from 'services';

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export function getData() {
    return dispatch => api.getAll()
    .then(data=> dispatch({
        type: GET_DATA_SUCCESS,
        payload: data.list,
    }))
    .catch(e => dispatch({
        type: GET_DATA_ERROR,
        payload: e,
    }));
}