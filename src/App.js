import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Shared/Header/Header';
import Profile from './Pages/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
    </div >
  );
}

export default App;
