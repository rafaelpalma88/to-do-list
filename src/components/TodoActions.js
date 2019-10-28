import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
    
}

export const markAsDone = (item) => {
    
    return dispatch => {
        axios.put(`${URL}/${item._id}`, { ...item, done: true})
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
    
}

export const markAsPending = (item) => {
    
    return dispatch => {
        axios.put(`${URL}/${item._id}`, { ...item, done: false})
            .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
    
}

export const remove = (item) => {
    
    return dispatch => {
        axios.delete(`${URL}/${item._id}`)
            //.then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
    
}

export const clear = () => {        
    return { type: 'TODO_CLEAR' }    
}