import * as Message from '../constants/Message'
import * as Types from '../constants/ActionTypes';
var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case  Types.CHANGE_MESSAGE :
            return action.message // tiep theo dispatch thang action chuyen thanh props cho com
            
        default: return [...state];
    }
}

export default message;