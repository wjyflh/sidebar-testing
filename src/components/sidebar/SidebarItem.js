import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'



// components
import Icon from '../icon/Icon'

// actions
import { setSidebarItemCurrentActivedId } from '../../store/actions/uiAction'


// styles
const SideBarItemStyle = styled.li`
    position: relative;
    width: 100%;
    height: auto;
    transition-duration: 0.3s;

    &.locked {
        opacity: 0.3;
        .mainlist-title-container {
            cursor: not-allowed;
        }
    }

    &.opened { 
        &.actived {
            background: ${ props => props.theme.colors.colorfuls.primaryHover };

            .mainlist-title-container {
                &:before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 10px;
                    height: 100%;
                    background: ${ props => props.theme.colors.colorfuls.primaryHover };
                }
            }
        }
        ul {
            /* transition-duration: 0.3s; */
            height: auto;
        }
    }

    &.closed { 
        &.actived {
            .mainlist-title-container {
                background: ${ props => props.theme.colors.colorfuls.primaryHover };
                &:before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 10px;
                    height: 100%;
                    background: ${ props => props.theme.colors.colorfuls.sidebarItemActivedDecoratorBg };
                }
            }
        }
    }

    /* main list thumbnail */
    .mainlist-title-container {
        position: relative;
        height: 80px;
        padding-left: 25px;
        cursor: pointer;
        display: flex;
        background: transparent;

        /* actived by child id matching */
        &.actived {
            background: ${ props => props.theme.colors.colorfuls.primaryHover };
        }       

        .icon {
            position: relative;
            width: 50px;
        }
        span {
            font-size: 30px;
            font-weight: bold; 
            line-height: 80px;
        }
    }
    
    /* child list */
    ul {
        position: relative;
        width: 100%;
        height: 0px;
        overflow: hidden;
        background: ${ props => props.theme.colors.colorfuls.primary };
        transition-duration: 0.3s;

         /* nested child list thumbnail */
        .childlist-title-container {
            position: relative;
            width: 100%;
            height: auto;
            line-height: 80px;
            font-size: 20px;
            padding-left: 75px;
            cursor: pointer;

            &.actived {
                background: ${ props => props.theme.colors.colorfuls.primaryHover };
                &:before {
                    content: "";
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 10px;
                    height: 100%;
                    background: ${ props => props.theme.colors.colorfuls.sidebarItemActivedDecoratorBg };
                }
            }

            &:hover {
                background: ${ props => props.theme.colors.colorfuls.primaryHover };
            }
        } 

        /* nested child list */
        ul {
            padding-left: 25px;
        }
    }
`



// functions
function isUserAccessibleToSideBarItem(itemData, userType) {
    return itemData.accessibleFor.includes(userType)
}



// default
function SidebarItem ({...props}) {
    const dispatch = useDispatch()

    // redux store data
    const userType = useSelector(store => store.user.userType)
    const isSidebarOpen = useSelector(store => store.ui.isSidebarOpen)
    const currentActivedId = useSelector(store => store.ui.currentActivedItemId)

    // states
    const [isChildListOpen, setIsChildListOpen] = useState(false)
    const { isMainList, itemData } = props
    let childItemListDOM = null

    // functions
    const setCurrentActivedId = (id) => {
        dispatch(setSidebarItemCurrentActivedId(id))
    }

    const renderMainList = (isMainList, mainListData) => {
        
        if(isMainList) {
            return (
                <div 
                    className={`mainlist-title-container ${(currentActivedId && (mainListData.id === currentActivedId[0])) && isChildListOpen ? 'actived' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation()

                        setCurrentActivedId(mainListData.id)

                        // locked logic
                        if(isUserAccessibleToSideBarItem(mainListData, userType)) {
                            setIsChildListOpen(!isChildListOpen)
                        }
                    }}
                >
                    <Icon iconName={mainListData.iconName}></Icon>
                    <span>
                        { mainListData.displayTitle }
                    </span>  
                </div>
            )
        } else {
            return (
                <div className={`childlist-title-container ${currentActivedId === mainListData.id ? 'actived' : ''}`}  
                    onClick={(e) => {
                        e.stopPropagation()

                        setCurrentActivedId(mainListData.id)

                        // locked logic
                        if(isUserAccessibleToSideBarItem(mainListData, userType)) {
                            setIsChildListOpen(!isChildListOpen)
                        }
                    }}
                >
                    <span>
                        { mainListData.displayTitle }
                    </span>  
                </div>
            )
        }
    }



    // render
    if(itemData && itemData.childList.length) {
        childItemListDOM = (
            <ul>
                {
                    itemData.childList.map(item => (
                        <SidebarItem isMainList={false} key={item.id} itemData={item} />
                    ))
                }
            </ul>
        )
    }
    return (
        <SideBarItemStyle 
            className={`${isUserAccessibleToSideBarItem(itemData, userType) ? '' : 'locked'} ${isChildListOpen && isSidebarOpen && itemData.id === currentActivedId[0] ? 'opened' : 'closed'} ${isChildListOpen && itemData.id === currentActivedId[0] ? 'actived' : ''}`}
        >
            {/* display list title */}
            {
                renderMainList(isMainList, itemData)
            }
            
            {/* second & further layers */}
            {
                isChildListOpen ? 
                    childItemListDOM
                :
                    null
            }
        </SideBarItemStyle>
    )
}
export default SidebarItem
