import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';

function App() {
  const x = [
    {
      name: 'Child Support',
      img: 'https://i.ibb.co/bg3rG80/child-Support.png'
    },
    {
      name: 'Refuge shelter',
      img: 'https://i.ibb.co/DzPy97r/refuse-Shelter.png'
    },
    {
      name: 'Food Charity',
      img: 'https://i.ibb.co/6wdzFtW/food-Charity.png'
    },
    {
      name: 'Host a clothing swap.',
      img: 'https://i.ibb.co/3z5vTFV/cloth-Swap.png'
    },
    {
      name: 'Host a river clean-up.',
      img: 'https://i.ibb.co/z72VsHB/river-Clean.png'
    },
    {
      name: 'Clean water for children',
      img: 'https://i.ibb.co/2d6QdKf/clean-Water.png'
    },
    {
      name: 'Good education',
      img: 'https://i.ibb.co/XDcLDtm/good-Education.png'
    },
    {
      name: 'New books for children',
      img: 'https://i.ibb.co/Mkwts4H/newBooks.png'
    }
  ]
  // kw21wFDk6N4IslD2
  // Volunteer-network
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
