const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    MessagesData: [
        {message: "Hi"},
        {message: "How are you?"},
        {message: "I like peaches"},
        {message: " My brother is nerd"},
    ],
    DialogsData: [
        {id: "1", name: "Vova"},
        {id: "2", name: "Dima"},
        {id: "3", name: "Vika"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Sveta"},
        {id: "6", name: "Viktor"},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE: {
            let newMessage = {message: action.newMessageBody}
            return {
                ...state,
                MessagesData: [...state.MessagesData, newMessage],
                MessageText: '',
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE,newMessageBody}
}

export default dialogsReducer;

