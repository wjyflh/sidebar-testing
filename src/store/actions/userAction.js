import { 
    SET_USER_ROLE
} from '../actionTypes'



export const setUserRole = (userType) => {
    return {
        type: SET_USER_ROLE,
        payload: userType
    }
}
