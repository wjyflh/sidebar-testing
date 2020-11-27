// action types
import { 
    SET_USER_ROLE
} from '../actionTypes'



const initState = {
    userType: null
}

const userReducer = (state = initState, action) => {

    switch(action.type) {
        case SET_USER_ROLE:
            return {
                ...state,
                userType: action.payload
            }
        
        default: 
            return state
    }

}
export default userReducer
