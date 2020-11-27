// action types
import { 
    IS_SIDE_BAR_OPEN,
    SET_SIDEBAR_ITEM_CURRENT_ACTIVED_ID
} from '../actionTypes'

// user type
import { UserType } from '../../utils/constant'



const initState = {
    isSidebarOpen: false,
    currentActivedItemId: null,
    sidebarData: [
        {
            id: "1",
            displayTitle: "Home",
            url: "",
            iconName: "home",
            isActived: false,
            isChildListOpen: true,
            accessibleFor: [
                UserType.normal,
                UserType.pro
            ],
            childList: [
                {
                    id: "1-1",
                    displayTitle: "feature1-1",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.normal,
                        UserType.pro
                    ],
                    childList: [
                        {
                            id: "1-1-1",
                            displayTitle: "feature1-1-1",
                            url: "",
                            iconName: "",
                            isActived: false,
                            isChildListOpen: false,
                            accessibleFor: [
                                UserType.normal,
                                UserType.pro
                            ],
                            childList: [
                                {
                                    id: "1-1-1-1",
                                    displayTitle: "feature1-1-1-1",
                                    url: "",
                                    iconName: "",
                                    isActived: false,
                                    isChildListOpen: false,
                                    accessibleFor: [
                                        UserType.normal,
                                        UserType.pro
                                    ],
                                    childList: []
                                },
                                {
                                    id: "1-1-1-2",
                                    displayTitle: "feature1-1-1-1",
                                    url: "",
                                    iconName: "",
                                    isActived: false,
                                    isChildListOpen: false,
                                    accessibleFor: [
                                        UserType.normal,
                                        UserType.pro
                                    ],
                                    childList: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "1-2",
                    displayTitle: "feature1-2",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.normal,
                        UserType.pro
                    ],
                    childList: []
                },
                {
                    id: "1-3",
                    displayTitle: "feature1-3",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.normal,
                        UserType.pro
                    ],
                    childList: [
                        {
                            id: "1-3-1",
                            displayTitle: "feature1-3-1",
                            url: "",
                            iconName: "",
                            isActived: false,
                            isChildListOpen: false,
                            accessibleFor: [
                                UserType.normal,
                                UserType.pro
                            ],
                            childList: [
                                {
                                    id: "1-3-1-1",
                                    displayTitle: "feature1-3-1-1",
                                    url: "",
                                    iconName: "",
                                    isActived: false,
                                    isChildListOpen: false,
                                    accessibleFor: [
                                        UserType.normal,
                                        UserType.pro
                                    ],
                                    childList: [
                                        
                                    ]
                                },
                                {
                                    id: "1-3-1-2",
                                    displayTitle: "feature1-3-1-2",
                                    url: "",
                                    iconName: "",
                                    isActived: false,
                                    isChildListOpen: false,
                                    accessibleFor: [
                                        UserType.normal,
                                        UserType.pro
                                    ],
                                    childList: [
                                        
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    id: "1-4",
                    displayTitle: "feature1-4",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.normal,
                        UserType.pro
                    ],
                    childList: []
                }
            ]
        },
        {
            id: "2",
            displayTitle: "Bell",
            url: "",
            iconName: "notification",
            isActived: false,
            isChildListOpen: true,
            accessibleFor: [
                UserType.normal,
                UserType.pro
            ],
            childList: [
                {
                    id: "2-1",
                    displayTitle: "feature2-1",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.normal,
                        UserType.pro
                    ],
                    childList: [
                        {
                            id: "2-1-1",
                            displayTitle: "feature2-1-1",
                            url: "",
                            iconName: "",
                            isActived: false,
                            isChildListOpen: false,
                            accessibleFor: [
                                UserType.normal,
                                UserType.pro
                            ],
                            childList: []
                        }
                    ]
                },
                {
                    id: "2-2",
                    displayTitle: "feature2-2",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.normal,
                        UserType.pro
                    ],
                    childList: []
                },
                {
                    id: "2-3",
                    displayTitle: "feature2-3",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.normal,
                        UserType.pro
                    ],
                    childList: []
                },
            ]
        },
        {
            id: "3",
            displayTitle: "Report",
            url: "",
            iconName: "newspaper",
            isActived: false,
            isChildListOpen: false,
            accessibleFor: [
                UserType.pro
            ],
            childList: [
                {
                    id: "3-1",
                    displayTitle: "feature3-1",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.pro
                    ],
                    childList: []
                },
                {
                    id: "3-2",
                    displayTitle: "feature3-2",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.pro
                    ],
                    childList: []
                },
            ]
        },
        {
            id: "4",
            displayTitle: "Feature",
            url: "",
            iconName: "options",
            isActived: false,
            isChildListOpen: false,
            accessibleFor: [
                UserType.pro
            ],
            childList: [
                {
                    id: "4-1",
                    displayTitle: "feature4-1",
                    url: "",
                    iconName: "",
                    isActived: false,
                    isChildListOpen: false,
                    accessibleFor: [
                        UserType.pro
                    ],
                    childList: []
                }
            ]
        }
    ] 
}

const uiReducer = (state = initState, action) => {

    switch(action.type) {
        case IS_SIDE_BAR_OPEN:
            return {
                ...state,
                isSidebarOpen: !action.payload
            }

        case SET_SIDEBAR_ITEM_CURRENT_ACTIVED_ID:
            return {
                ...state,
                currentActivedItemId: action.payload
            }
        
        default: 
            return state
    }

}
export default uiReducer
