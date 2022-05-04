
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login_SignUP from './components/Login_SignUP';
import InputDisplay from './components/InputDisplay';



const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login_SignUP />} />       
        <Route path="/" element={<InputDisplay />} />       
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes