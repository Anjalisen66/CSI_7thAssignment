import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Detail from './Components/Detail';
import LoginForm from './Components/Login';
import SignupForm from './Components/Signup';
import ImageOverlay from './Components/ImgOverlay';
// import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/detail' element = {<Detail />} />
      <Route path='/login' element = {<ImageOverlay />} />
      <Route path="/products/:category" element={<Detail />} />
       
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
