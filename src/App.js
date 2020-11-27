import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ResetStyle, CustomizedStyle } from './styles/globalStyles'
import styled from 'styled-components'

// icon import with iconfont
import './assets/icofont/icofont.min.css'

// components
import Sidebar from './components/sidebar/SideBar'

// actions
import { setUserRole } from './store/actions/userAction'

// types
import { UserType } from './utils/constant'



// styles
export const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  background: #e8ffff;

  .usertype-list {
    width: 400px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ccf6c8;
    padding: 80px 50px;

    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .wrapper {
      display: flex;
    }

    .usertype-item {
      width: 120px;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      margin-right: 20px;
      background: #333;
      color: #fff;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      transition-duration: 0.5s;

      &:active {
        opacity: 0.6;
      }

      &:last-child {
        margin-right: 0px;
      }
    }
  }

  .sign {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: #ccc;

    a {
      color: #7579e7;
    }

    span {
      font-weight: bold;
      cursor: default;
    }
  }
`

// App
function App() {
  const dispatch = useDispatch()

  
  // init sidebar state with
  const sidebarData = useSelector(store => store.ui.sidebarData)

  // init User type
  useEffect(() => {
    dispatch(setUserRole(UserType.pro))
  }, [dispatch]);

  

  return (
    <AppStyle>
      <ResetStyle></ResetStyle>
      <CustomizedStyle></CustomizedStyle>

      <p className="sign">Created by <span><a href="https://www.wjy.rocks/">WJY</a></span></p>

      {/* sidebar */}
      <Sidebar data={sidebarData}></Sidebar>
    </AppStyle>
  );
}

export default App;
