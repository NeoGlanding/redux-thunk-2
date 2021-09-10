import axios from 'axios';

export const getData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            let data = res.data;
            dispatch({type: 'GET_API', payload: data})
        }).catch(err => console.log(err));
    }
}