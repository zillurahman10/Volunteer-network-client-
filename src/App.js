import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import Aos from 'aos';
import Contents from './Pages/Contents/Contents';
import AboutUs from './Pages/About Us/AboutUs';
import ContactUs from './Pages/Contact Us/Contact Us';


function App() {
  Aos.init()
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        {/* <Route path="/contents" element={<Contents></Contents>}></Route> */}
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
