import { 
    IS_SIDE_BAR_OPEN,
    IS_SIDE_BAR_CHILDLIST_OPEN,
    SET_SIDEBAR_ITEM_CURRENT_ACTIVED_ID
} from '../actionTypes'



export const switchIsSidebarOpen = (isOpen) => {
    return {
        type: IS_SIDE_BAR_OPEN,
        payload: isOpen
    }
}

export const switchIsChildListOpen = (isOpen) => {
    return {
        type: IS_SIDE_BAR_CHILDLIST_OPEN,
        payload: isOpen
    }
}

export const setSidebarItemCurrentActivedId = (id) => {
    return {
        type: SET_SIDEBAR_ITEM_CURRENT_ACTIVED_ID,
        payload: id
    }
}
