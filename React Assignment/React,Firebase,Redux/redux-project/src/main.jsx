
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import UserStore from './CrudRedux/UserStore.js'
import CounterStore from './redux/CounterStore.js'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Provider store={UserStore}>
    <Provider store={CounterStore}>  
      <App />
    </Provider>
    </Provider>
  </StrictMode>
)