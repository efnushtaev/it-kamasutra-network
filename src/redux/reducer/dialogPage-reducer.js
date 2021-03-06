const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {

    dialogsData: [{
            id: 1,
            name: 'Efim'
        },
        {
            id: 2,
            name: 'Dima'
        },
        {
            id: 3,
            name: 'Timur'
        },
    ],
    messagesData: [{
            id: 1,
            message: 'Hi!',
            come: 'in'
        },
        {
            id: 2,
            message: 'Hi!, how are you?',
            come: 'out'
        },
        {
            id: 3,
            message: 'How is your projects?',
            come: 'out'
        },
        {
            id: 4,
            message: 'My projects is yo',
            come: 'in'
        }
    ],
    newMessageText: ''
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData:[...state.messagesData, {id:6, message: action.text }],
                newMessageText: ''
            };
        }
        default:
            return state;
    }
}

export const postNewMessage = (text) => ({
    type: ADD_MESSAGE,
    text: text
})


export default dialogPageReducer;