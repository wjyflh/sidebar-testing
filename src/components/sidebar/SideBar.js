import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'

// assets
import gogoroImg from '../../assets/images/gogoro_icon.png'

// components
import SidebarItem from './SidebarItem'
import Icon from '../icon/Icon'

// actions
import { switchIsSidebarOpen } from '../../store/actions/uiAction'


// styles keyframes
const switcherRotate = keyframes`
    0% {
        transform: rotate(-90deg);
    }
    100% {
        transform: rotate(0deg);
    }
`

// styles
const SideBarStyle = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 100vh;
    min-height: 100vh;
    background: ${ props => props.theme.colors.colorfuls.primary };
    color: #fff;
    z-index: ${ props => props.theme.zIndexs.sidebar };
    transition-duration: 0.3s;
    box-shadow: 0px 0px 5px 0px ${ props => props.theme.colors.colorfuls.sidebarShadow};

    &.open {
        width: 400px;

        .content {
            .top-container {
                width: auto;
                overflow: hidden;
                padding: 50px 0px 0px 35px;

                .logo {
                    position: relative;
                    left: 0%;
                    opacity: 1;
                    transform: translateX(0px);
                    transition: transform 0.3s 1s ease-in;
                    transition: opacity 0s 0s ease-in;
                }
                
                .sidebar-switcher {
                    left: calc(100% - 30px - 35px);
                    transform: translateX(0%);

                    i.icon {
                        animation: ${switcherRotate} 0.6s ease-in-out;
                    }
                }
            }
        }
    }

    &.close {
        transition-delay: 0.3s;
        
        .content {
            .nav-container {
                display: block;

                & > ul {
                    width: 100%;
                    height: auto;
                    padding-bottom: 40px;

                    & > li {
                        .mainlist-title-container {
                            &.actived {
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
                            span {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }

    .content {
        height: 100vh;

        .top-container {
            position: relative;
            width: 100%;
            height: auto;
            padding: 50px 0px 0px 35px;
            display: flex;
            align-items: center;
            z-index: 1;

            .logo {
                position: relative;
                left: -100%;
                width: 180px;
                height: 50px;
                background: url(${gogoroImg});
                background-size: cover;
                background-position: center center;
                opacity: 0;
            }

            .sidebar-switcher {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                width: 30px;
                height: 30px;
                background: ${ props => props.theme.colors.colorfuls.primary };
                display: flex;
                justify-content: center;
                align-items: center;
                transition-duration: 0.3s;
                transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
                cursor: pointer;

                &:active {
                    i.icon:before {
                        transition-duration: 0.5s;
                        line-height: 28px;
                        font-size: 28px;
                    }
                }
            }
        }

        .blank {
            position: relative;
            width: 100%;
            height: 60px;
            z-index: 1;

            /* gradient decorator */
            &:before {
                content: "";
                position: absolute;
                top: 100%;
                width: 100%;
                height: 10px;
                background: linear-gradient(
                    to bottom, 
                    ${ props => props.theme.colors.colorfuls.primary } 0%, 
                    ${ props => props.theme.colors.colorfuls.primaryTransparent } 100%
                );
                z-index: 100;
            }
        }

        .nav-container {
            position: relative;
            height: auto;
            max-height: calc(100vh - 180px);
            padding-top: 20px;
            padding-bottom: 40px;
            overflow-x: hidden;
            overflow-y: auto;
            z-index: 1;
            
            /* first layer */
            & > ul {
                width: 400px;
                height: auto;

                & > li {
                }
            }
        }
    }

    .activator {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100vh;
        background: transparent;
        z-index: 0;
        cursor: pointer;

        &.actived {
            width: 100vw;
        }
    }
`



// functions
function renderSwitcher (isOpen) {
    if(isOpen) {
        return (
            <Icon iconName="close"></Icon>
        )
    } else {
        return (
            <Icon iconName="navigation-menu"></Icon>
        )
    }
}

const renderSidebarItemList = (listData) => {
    if(listData && listData.length > 0) {
        return (
            <ul>
                {
                    listData.map((item) => (
                        <SidebarItem isMainList={true} key={item.id} itemData={item} />
                    ))
                }
            </ul>
        )
    } else {
        return (
            <div>No data</div>
        )
    }
}



// default
function SideBar ({...props}) {
    const { data } = props
    
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(store => store.ui.isSidebarOpen)



    return (
        <SideBarStyle className={isSidebarOpen ? 'open': 'close'}>
            <div className="content">
                {/* top */}
                <div className="top-container">
                    <div className="logo"></div>
                    <div className="sidebar-switcher" onClick={() => {dispatch(switchIsSidebarOpen(isSidebarOpen))}}>
                        {
                            renderSwitcher(isSidebarOpen)
                        }
                    </div>
                </div>

                <div className="blank"></div>
            
                {/* navs */}
                <nav className="nav-container">
                    {
                        renderSidebarItemList(data)
                    }
                </nav>
            </div>

            {/* activator */}
            <div className={`activator ${isSidebarOpen ? 'actived' : ''}`} onClick={() => {
                dispatch(switchIsSidebarOpen(isSidebarOpen))
            }}></div>
        </SideBarStyle>
    )
}
export default SideBar
