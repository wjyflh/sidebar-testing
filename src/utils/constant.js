// user type
export const UserType = {
    normal: 'normal',
    pro: 'pro'
}

// utils
export const findTargetObjInNestedArrayById = (nestedArrayData, targetId) => {

    // functions
    const findTargetId = (obj, id) => {
        if (obj.id === id) {
            return obj
        }

        if (obj.childList && obj.childList.length > 0) {
            for (let item of obj.childList) {
                let target = findTargetId(item, id)
                if (target) {
                    return target
                }
            }
        }
        return null
    }
    
    // init here
    for (let item of nestedArrayData) {
        let target = findTargetId(item, targetId)
        if (target) {
            return target
        }
    }
    
} 