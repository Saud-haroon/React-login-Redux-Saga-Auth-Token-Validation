import React, {useEffect } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from "react-router-dom";
import store from './store/store'
import InputDisplay from './components/InputDisplay';
import Login_SignUP from './components/Login_SignUP';
import AppRoutes from './AppRoutes';
import { Token } from '@mui/icons-material';

function App() {
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("jsonWebToken")
    }
  },[])

  return (
    <Provider store={store}>

    {/* <Login_SignUP/> */}
    <AppRoutes/>

    </Provider>
    
  )

}

export default App;
