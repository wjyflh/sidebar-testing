import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ResetStyle, CustomizedStyle } from './styles/globalStyles'

// icon import with iconfont
import './assets/icofont/icofont.min.css'

// components
import Sidebar from './components/sidebar/SideBar'

// actions
import { setUserRole } from './store/actions/userAction'

// types
import { UserType } from './utils/constant'



// App
function App() {
  const dispatch = useDispatch()

  
  // init sidebar state with
  const sidebarData = useSelector(store => store.ui.sidebarData)

  // init user type
  useEffect(() => {
    dispatch(setUserRole(UserType.pro))
  }, []);

  

  return (
    <div className="App">
      <ResetStyle></ResetStyle>
      <CustomizedStyle></CustomizedStyle>

      {/* sidebar */}
      <Sidebar data={sidebarData}></Sidebar>
    </div>
  );
}

export default App;
