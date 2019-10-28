import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    items: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar a fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe as 10:00',
            done: false
        }, {
            _id: 3,
            description: 'Consultas médicas depois do almoço',
            done: false
        }]
    })
})

export default rootReducer