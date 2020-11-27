import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// styled components
import { ThemeProvider } from 'styled-components'

// redux
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/_rootReducer'

// style theme
import { defaultTheme } from './utils/constantStyle'



// redux settinh
export const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
export const reduxStore = createStoreWithMiddleware(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </Provider> 
  </React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
